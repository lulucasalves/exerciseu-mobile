import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import CircularProgress from '../CircularOpt'
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
  total
}) {
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
