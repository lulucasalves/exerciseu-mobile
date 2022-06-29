import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'

export function ExerciseHeader() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('GymAll')}>
        <Ionicons name="arrow-undo" size={30} color={theme.background} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.save}>
        <Ionicons name="add" size={25} color={theme.background} />
        <Text style={styles.text}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}
