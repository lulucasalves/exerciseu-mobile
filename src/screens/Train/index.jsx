import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Vibration } from 'react-native'
import { useSelector } from 'react-redux'
import { Background } from '../../components/Background'
import { TrainContent } from '../../components/TrainContent'
import { TrainHeader } from '../../components/TrainHeader'
import { TrainNavigation } from '../../components/TrainNavigation'
import { getRemaining } from '../../utils/formatTime'

export function Train() {
  const { currentPlay } = useSelector((auth) => auth.play)
  const [remainingSecs, setRemainingSecs] = useState(3600)
  const [exerciseSecs, setExerciseSecs] = useState(60)
  const [step, setStep] = useState(1)
  const [isActive, setIsActive] = useState(true)
  const totalHours = getRemaining(remainingSecs)
  const exerciseHours = getRemaining(exerciseSecs)
  const [autoMode, setAutoMode] = useState(false)
  const [completeTrain, setCompleteTrain] = useState([
    {
      time: 6,
      name: 'Flexões',
      type: 1,
      quantity: 0
    },
    {
      time: 10,
      name: 'Descanso',
      type: 0,
      quantity: 0
    },
    {
      time: 70,
      name: 'Abdominais',
      type: 1,
      quantity: 20
    }
  ])

  function nextStep() {
    if (
      completeTrain.length > step &&
      exerciseSecs < completeTrain[step - 1].time - 5
    ) {
      setStep((old) => old + 1)
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep((old) => old - 1)
      setRemainingSecs(
        (oldSecs) =>
          oldSecs +
          completeTrain[step - 2].time +
          (completeTrain[step - 1].time - exerciseSecs)
      )
    }
  }

  useEffect(() => {
    let interval = null
    ;(async () => {
      const vibrate = await AsyncStorage.getItem('vibrate')

      if (exerciseSecs === 0 && vibrate === '1') {
        Vibration.vibrate([500, 1000, 2000])
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
    } else {
      if (isActive && remainingSecs > 0 && exerciseSecs > 0) {
        interval = setInterval(() => {
          setRemainingSecs((oldSecs) => oldSecs - 1)
          setExerciseSecs((oldSecs) => oldSecs - 1)
        }, 1000)
      }
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

  return (
    <Background>
      <TrainHeader nextStep={nextStep} prevStep={prevStep} />
      <TrainContent
        nextStep={nextStep}
        setIsActive={setIsActive}
        step={step}
        isActive={isActive}
        totalHours={totalHours}
        exerciseSecs={exerciseSecs}
        exerciseHours={exerciseHours}
        completeTrain={completeTrain}
      />
      <TrainNavigation setRepeat={setAutoMode} repeat={autoMode} />
    </Background>
  )
}
