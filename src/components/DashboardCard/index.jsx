import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

export function DashboardCard({ data, ...props }) {
  return (
    <TouchableOpacity {...props} style={styles.card}>
      <View style={styles.text}>
        <Text style={styles.train}>{data.name}</Text>
        <Text style={styles.finish}>{`Tempo: ${data.finish}`}</Text>
      </View>
      <Ionicons name="play" size={40} color={theme.primary} />
    </TouchableOpacity>
  )
}
