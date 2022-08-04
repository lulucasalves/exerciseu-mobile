import { View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

export function TrainHeader({ prevStep, nextStep, jump }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => prevStep()}>
        <Ionicons name="arrow-back" size={30} color={theme.primary} />
      </TouchableOpacity>
      {jump && (
        <TouchableOpacity onPress={() => nextStep()}>
          <Ionicons name="arrow-forward" size={30} color={theme.primary} />
        </TouchableOpacity>
      )}
    </View>
  )
}
