import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function TrainContent({
  setIsActive,
  totalHours,
  exerciseHours,
  completeTrain,
  nextStep,
  step,
  isActive,
  exerciseSecs,
  jump
}) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.finishTime}
      >{`Faltam ${totalHours.hours}:${totalHours.mins}:${totalHours.secs}`}</Text>
      <View
        style={[
          styles.exerciseBox,
          {
            borderColor:
              completeTrain[step - 1].type === 1 ? theme.primary : theme.yellow
          }
        ]}
      >
        <Text style={styles.exerciseText}>
          {`${exerciseHours.mins}:${exerciseHours.secs}`}
        </Text>
        {completeTrain[step - 1].quantity > 0 && (
          <Text style={styles.quantityText}>
            {`${completeTrain[step - 1].quantity}x`}
          </Text>
        )}
      </View>
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
