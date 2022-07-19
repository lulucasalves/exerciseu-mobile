import { useEffect, useState } from 'react'
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
    }
  }

  useEffect(() => {
    let interval = null
    const countExercise = exerciseSecs > 1 || autoMode

    if (countExercise) {
      nextStep()
    }

    if (isActive && remainingSecs > 0 && countExercise) {
      interval = setInterval(() => {
        setRemainingSecs((oldSecs) => oldSecs - 1)
        setExerciseSecs((oldSecs) => oldSecs - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, remainingSecs])

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
