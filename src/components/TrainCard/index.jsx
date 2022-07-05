import { Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function TrainCard({ data, ...props }) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.card,
        { borderColor: !data.rest ? theme.primary : theme.yellow }
      ]}
    >
      <Text
        style={[
          styles.time,
          { color: !data.rest ? theme.primary : theme.yellow }
        ]}
      >
        {`${parseInt(data.time / 60 < 1 ? 1 : data.time / 60)}m`}
      </Text>

      <View style={styles.texts}>
        <Text style={styles.train}>{!data.rest ? data.name : 'Descanso'}</Text>
        {data.quantity > 1 && (
          <Text style={styles.quantity}>{`${data.quantity}x`}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
