import { View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

export function TrainHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('anterior')}>
        <Ionicons name="arrow-back" size={30} color={theme.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('próximo')}>
        <Ionicons name="arrow-forward" size={30} color={theme.primary} />
      </TouchableOpacity>
    </View>
  )
}
