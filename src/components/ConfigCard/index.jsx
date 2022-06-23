import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

export function ConfigCard({ data, ...props }) {
  return (
    <TouchableOpacity {...props} style={styles.card}>
      <Text style={styles.name}>{data.name}</Text>

      {data.icon}
    </TouchableOpacity>
  )
}
