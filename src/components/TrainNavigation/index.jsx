import { Alert, TouchableOpacity, View } from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function TrainNavigation({ repeat, setRepeat, youtube }) {
  const navigation = useNavigation()

  function createAlert() {
    Alert.alert(
      'Sair do Treino',
      'Ao sair você perderá todo o seu progresso!',
      [
        {
          text: 'voltar'
        },
        {
          text: 'sair',
          onPress: () => navigation.navigate('Home')
        }
      ],
      { cancelable: true }
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={createAlert}>
        <Ionicons name="exit-outline" size={25} color="#fff" />
      </TouchableOpacity>
      {youtube && (
        <TouchableOpacity onPress={() => navigation.navigate('Youtube')}>
          <SimpleLineIcons name="social-youtube" size={25} color="#fff" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => setRepeat(!repeat)}>
        <MaterialCommunityIcons
          name={`repeat${repeat ? '' : '-off'}`}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )
}
