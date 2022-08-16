import { AppState, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import CircularProgress from '../CircularOpt'
import { styles } from './styles'
import * as Notifications from 'expo-notifications'
import { useEffect, useRef, useState } from 'react'

export function TrainContent({
  setIsActive,
  totalHours,
  exerciseHours,
  completeTrain,
  nextStep,
  step,
  isActive,
  exerciseSecs,
  total,
  setExerciseSecs,
  setRemainingSecs
}) {
  const appState = useRef(AppState.currentState)
  const [timeFrom, setTimeFrom] = useState(0)
  const [timeTo, setTimeTo] = useState(0)

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: true
    })
  })

  const _handleAppStateChange = (nextAppState) => {
    Notifications.dismissAllNotificationsAsync()

    if (
      !appState.current.match(/inactive|background/) &&
      nextAppState !== 'active'
    ) {
      let today = new Date()
      let time =
        parseInt(today.getSeconds()) + 60 * parseInt(today.getMinutes())

      setTimeTo(time)

      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Treino em andamento',
          body: `Exercício de pernas termina em ${exerciseSecs} segundos`,
          categoryIdentifier: 'train'
        },
        trigger: null
      })

      Notifications.setNotificationCategoryAsync('train', [
        {
          actionId: 'one',
          buttonTitle: isActive ? 'Pausar' : 'Continuar'
        }
      ])

      Notifications.addNotificationResponseReceivedListener(() =>
        setIsActive(!isActive)
      )
    } else {
      let today = new Date()
      let time =
        parseInt(today.getSeconds()) + 60 * parseInt(today.getMinutes())

      setTimeFrom(time)
    }

    appState.current = nextAppState
  }

  useEffect(() => {
    const times = timeFrom - timeTo
    if (timeFrom > timeTo) {
      if (exerciseSecs > times + 1) {
        setRemainingSecs((old) => old - times)
        setExerciseSecs((old) => old - times)
      } else {
        setRemainingSecs((old) => old - exerciseSecs + 1)
        setExerciseSecs(1)
      }
    }
  }, [timeFrom, timeTo])

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      _handleAppStateChange
    )
    return () => {
      subscription.remove()
    }
  }, [isActive])

  return (
    <View style={styles.container}>
      <Text
        style={styles.finishTime}
      >{`Faltam ${totalHours.hours}:${totalHours.mins}:${totalHours.secs}`}</Text>
      <CircularProgress
        exerciseHours={exerciseHours}
        exerciseSecs={exerciseSecs}
        total={total}
        completeTrain={completeTrain}
        step={step}
      />

      <Text style={styles.exerciseName}>{completeTrain[step - 1].name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsActive(!isActive)}
      >
        <Text style={styles.buttonText}>
          {!isActive ? 'Continuar' : 'Pausar'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonNext,
          {
            backgroundColor:
              exerciseSecs < completeTrain[step - 1].time - 5
                ? theme.primary
                : theme.gray
          }
        ]}
        onPress={() => {
          nextStep()
        }}
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  )
}
