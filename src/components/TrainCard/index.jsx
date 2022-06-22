import { Text, TouchableOpacity } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function TrainCard({ data, ...props }) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.card,
        { borderColor: data.type > 0 ? theme.primary : theme.yellow }
      ]}
    >
      <Text
        style={[
          styles.time,
          { color: data.type > 0 ? theme.primary : theme.yellow }
        ]}
      >
        {data.type > 1 ? `${data.time}x` : `${data.time / 60}m`}
      </Text>

      <Text style={styles.train}>{data.type > 0 ? data.name : 'Descanso'}</Text>
    </TouchableOpacity>
  )
}
