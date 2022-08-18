import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function NavSpotify({ section }) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Spotify')}>
        <Ionicons
          name={section === 'music' ? 'musical-notes' : 'musical-notes-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SpotifyCategories')}
      >
        <Ionicons
          name={section === 'categories' ? 'disc' : 'disc-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )
}