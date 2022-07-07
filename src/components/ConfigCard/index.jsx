import { styles } from './styles'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { configFunc } from '../../utils/configFunc'
import { useDispatch } from 'react-redux'

export function ConfigCard({ data, ...props }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={() =>
        configFunc({
          func: data.func,
          navigation,
          dispatch
        })
      }
      {...props}
      style={styles.card}
    >
      <Text style={styles.name}>{data.name}</Text>

      {data.icon}
    </TouchableOpacity>
  )
}
