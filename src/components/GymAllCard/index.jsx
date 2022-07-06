import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { formatCard } from '../../utils/formatCard'
import { setEditTrain } from '../../store/train'
import { useDispatch } from 'react-redux'

export function GymAllCard({ data, setModal, ...props }) {
  const dispatch = useDispatch()

  function edit() {
    dispatch(
      setEditTrain({
        id: data.id,
        name: data.name
      })
    )

    setModal(true)
  }

  return (
    <TouchableOpacity {...props} style={styles.card}>
      <View style={styles.text}>
        <Text style={styles.train}>{data.name}</Text>
        <Text style={styles.finish}>{formatCard(data.finish)}</Text>
      </View>
      <TouchableOpacity onPress={() => edit()}>
        <Ionicons name="create-outline" size={38} color={theme.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
