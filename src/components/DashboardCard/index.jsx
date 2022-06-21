import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

export function DashboardCard(props) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.text}>
        <Text style={styles.train}>{props.train}</Text>
        <Text
          style={styles.finish}
        >{`${props.time} Termina: ${props.finish}`}</Text>
      </View>
      <Ionicons name="play" size={40} color={theme.primary} />
    </TouchableOpacity>
  )
}
