import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Navigation({ section }) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons
          name={section === 'home' ? 'home' : 'home-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Ionicons
          name={section === 'play' ? 'play' : 'play-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GymAll')}>
        <Ionicons
          name={section === 'gym' ? 'fitness' : 'fitness-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Championship')}>
        <Ionicons
          name={section === 'championship' ? 'trophy' : 'trophy-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons
          name={section === 'config' ? 'apps' : 'apps-outline'}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )
}
