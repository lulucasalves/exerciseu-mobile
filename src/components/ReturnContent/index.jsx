import { Entypo } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function ReturnContent() {
  const navigation = useNavigation()

  async function cancelTrain() {
    navigation.navigate('Home')
    await AsyncStorage.setItem('currentTrain', '')
  }

  return (
    <View style={styles.container}>
      <Entypo name="emoji-neutral" size={80} color={theme.background} />

      <Text style={styles.text}>
        Você fechou seu aplicativo durante os exercícios! Gostaria de retomar
        seu último treino?
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={cancelTrain} style={styles.button}>
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Train')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
