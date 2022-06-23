import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

export function GymExploreCard({ data, ...props }) {
  return (
    <TouchableOpacity {...props} style={styles.card}>
      <View style={styles.text}>
        <Text style={styles.train}>{data.name}</Text>
        <Text style={styles.finish}>{data.finish}</Text>
      </View>
      <Feather name="eye" size={35} color={theme.primary} />
    </TouchableOpacity>
  )
}
