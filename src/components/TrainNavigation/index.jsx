import { TouchableOpacity, View } from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function TrainNavigation({ repeat, setRepeat, spotify }) {
  const navigation = useNavigation()

  function navigate(page) {
    navigation.navigate(page)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Ionicons name="exit-outline" size={25} color="#fff" />
      </TouchableOpacity>
      {spotify && (
        <TouchableOpacity onPress={() => navigate('Spotify')}>
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
