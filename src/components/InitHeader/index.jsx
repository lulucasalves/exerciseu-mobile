import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../styles/theme'

export function InitHeader({ currentPlay }) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Ionicons name="arrow-undo" size={30} color={theme.gray8} />
      </TouchableOpacity>
      <Text style={styles.text}>{currentPlay.title}</Text>
    </View>
  )
}
