import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export function PlayHeader({ statusModal, currentPlay }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => statusModal(true)}>
        <Ionicons name="menu-outline" size={35} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.text}>{currentPlay.title}</Text>
    </View>
  )
}
