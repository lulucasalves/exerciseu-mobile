import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'

export function SelectHeader() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Ionicons name="arrow-undo" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
