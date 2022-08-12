import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import CircularProgress from '../CircularOpt'
import { styles } from './styles'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'

export function TrainContent({
  setIsActive,
  totalHours,
  exerciseHours,
  completeTrain,
  nextStep,
  step,
  isActive,
  exerciseSecs,
  total
}) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: true
    })
  })

  useEffect(() => {
    Notifications.dismissAllNotificationsAsync()

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: `Faltam nkn`,
        categoryIdentifier: 'opa'
      },
      trigger: null
    })

    Notifications.setNotificationCategoryAsync('opa', [
      {
        actionId: 'one',
        buttonTitle: isActive ? 'Pausar' : 'Continuar'
      }
    ])

    Notifications.addNotificationResponseReceivedListener(() =>
      setIsActive(!isActive)
    )
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
