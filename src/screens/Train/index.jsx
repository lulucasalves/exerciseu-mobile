import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Vibration } from 'react-native'
import { useSelector } from 'react-redux'
import { Background } from '../../components/Background'
import { TrainContent } from '../../components/TrainContent'
import { TrainHeader } from '../../components/TrainHeader'
import { TrainNavigation } from '../../components/TrainNavigation'
import { getRemaining } from '../../utils/formatTime'
import { Audio } from 'expo-av'
import { useNavigation } from '@react-navigation/native'
import { MusicPlayer } from '../../components/MusicPlayer'

export function Train() {
  const { currentExercise } = useSelector((auth) => auth.exercise)
  const myTrains = [
    {
      time: 6,
      name: 'Flexões1',
      type: 1,
      quantity: 20
    },
    {
      time: 6,
      name: 'Descanso',
      type: 0,
      quantity: 0
    }
  ]

  const navigation = useNavigation()
  const { currentPlay } = useSelector((auth) => auth.play)
  const [remainingSecs, setRemainingSecs] = useState(3600)
  const [exerciseSecs, setExerciseSecs] = useState(60)
  const [step, setStep] = useState(1)
  const [isActive, setIsActive] = useState(true)
  const totalHours = getRemaining(remainingSecs)
  const exerciseHours = getRemaining(exerciseSecs)
  const [autoMode, setAutoMode] = useState(false)
  const [jump, setJump] = useState(true)
  const [youtube, setYoutube] = useState(true)
  const [completeTrain, setCompleteTrain] = useState([
    {
      time: 200,
      name: '',
      type: 0,
      quantity: 0
    }
  ])

  const [sound, setSound] = useState()

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/notification.mp3')
    )

    setSound(sound)

    await sound.playAsync()
  }

  useEffect(() => {
    ;(async () => {
      if (currentExercise.id !== '0') {
        await AsyncStorage.setItem('exerciseId', currentExercise.id)
      }
    })()
  }, [currentExercise])

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  function nextStep() {
    const trainType = completeTrain[step - 1].type || 0
    const trainTime = completeTrain[step - 1].time || 0

    if (exerciseSecs < trainTime - 5 && completeTrain.length > step) {
      if (trainType !== 0) {
        ;(async () => {
          const totalValueStr = await AsyncStorage.getItem('totalTime')
          const totalValue = totalValueStr ? parseInt(totalValueStr) : 0

          await AsyncStorage.setItem(
            'totalTime',
            String(trainTime + totalValue)
          )
          await AsyncStorage.setItem('currentStep', String(step))
        })()
      }
      setStep((old) => old + 1)
    } else if (completeTrain.length > step && jump) {
      setRemainingSecs(
        (oldSecs) => oldSecs - (trainTime - (trainTime - exerciseSecs))
      )

      setStep((old) => old + 1)
    } else {
      ;(async () => {
        await AsyncStorage.setItem('currentStep', '')
        await AsyncStorage.setItem('exerciseId', '')
        navigation.navigate('FinishTrain')
      })()
    }
  }

  function prevStep() {
    const trainTime = completeTrain[step - 1].time || 0

    if (step > 1) {
      setStep((old) => old - 1)
      setRemainingSecs(
        (oldSecs) =>
          oldSecs + (completeTrain[step - 2].time + (trainTime - exerciseSecs))
      )
    }
  }

  useEffect(() => {
    ;(async () => {
      const jumpExercises = await AsyncStorage.getItem('jump')
      const prepare = await AsyncStorage.getItem('preparation')
      const stretch = await AsyncStorage.getItem('stretch')
      const youtube = await AsyncStorage.getItem('youtube')
      const exerciseId = (await AsyncStorage.getItem('exerciseId')) || ''

      if (jumpExercises === '0') setJump(false)
      if (youtube === '0') setYoutube(false)

      let listStorage = myTrains

      if (exerciseId) {
        listStorage = myTrains
      }

      if (parseInt(prepare) > 0 && parseInt(stretch) > 0) {
        setCompleteTrain([
          {
            time: parseInt(stretch),
            name: 'Alongamento',
            type: 1,
            quantity: 0
          },
          {
            time: parseInt(prepare),
            name: 'Prepare-se',
            type: 0,
            quantity: 0
          },
          ...listStorage
        ])
      } else if (!parseInt(prepare) > 0 && parseInt(stretch) > 0) {
        setCompleteTrain([
          {
            time: parseInt(stretch),
            name: 'Alongamento',
            type: 1,
            quantity: 0
          },
          ...listStorage
        ])
      } else if (parseInt(prepare) > 0 && !parseInt(stretch) > 0) {
        setCompleteTrain([
          {
            time: parseInt(prepare),
            name: 'Prepare-se',
            type: 0,
            quantity: 0
          },
          ...listStorage
        ])
      } else {
        setCompleteTrain(listStorage)
      }
    })()
  }, [])

  useEffect(() => {
    let interval = null
    ;(async () => {
      const vibrate = await AsyncStorage.getItem('vibrate')
      const audio = await AsyncStorage.getItem('audio')

      if (exerciseSecs === 0 && vibrate === '1' && isActive) {
        Vibration.vibrate([500, 1000, 2000])
      }

      if (exerciseSecs === 0 && audio === '1' && isActive) {
        await playSound()
      }
    })()

    if (autoMode) {
      if (isActive && remainingSecs > 0) {
        interval = setInterval(() => {
          setRemainingSecs((oldSecs) => oldSecs - 1)
          setExerciseSecs((oldSecs) => oldSecs - 1)
        }, 1000)
      }

      if (exerciseSecs <= 0) {
        nextStep()
      }
    } else if (isActive && remainingSecs > 0 && exerciseSecs > 0) {
      interval = setInterval(() => {
        setRemainingSecs((oldSecs) => oldSecs - 1)
        setExerciseSecs((oldSecs) => oldSecs - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, exerciseSecs])

  useEffect(() => {
    if (currentPlay) {
      setRemainingSecs(currentPlay.totalTime * 60)
    }
  }, [currentPlay])

  useEffect(() => {
    setExerciseSecs(completeTrain[step - 1].time)
  }, [completeTrain, step])

  useEffect(() => {
    ;(async () => {
      const currentStep = await AsyncStorage.getItem('currentStep')
      const exerciseId = (await AsyncStorage.getItem('exerciseId')) || ''

      if (
        parseInt(currentStep) > 0 &&
        exerciseId &&
        completeTrain.length > parseInt(currentStep)
      ) {
        setStep(parseInt(currentStep))
      }
    })()
  }, [completeTrain])

  return (
    <Background>
      <TrainHeader jump={jump} nextStep={nextStep} prevStep={prevStep} />
      <TrainContent
        nextStep={nextStep}
        setIsActive={setIsActive}
        jump={jump}
        step={step}
        isActive={isActive}
        totalHours={totalHours}
        exerciseSecs={exerciseSecs}
        exerciseHours={exerciseHours}
        completeTrain={completeTrain}
        total={completeTrain[step - 1].time}
        setExerciseSecs={setExerciseSecs}
        setRemainingSecs={setRemainingSecs}
      />
      <MusicPlayer />
      <TrainNavigation
        youtube={youtube}
        setRepeat={setAutoMode}
        repeat={autoMode}
      />
    </Background>
  )
}
