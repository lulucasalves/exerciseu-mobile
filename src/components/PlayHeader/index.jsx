import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

export function PlayHeader({ statusModal }) {
  const name = 'Treino de pernas'

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => statusModal(true)}>
        <Ionicons name="menu-outline" size={35} color={theme.background} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}
