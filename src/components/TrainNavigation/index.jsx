import { TouchableOpacity, View } from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export function TrainNavigation() {
  const navigation = useNavigation()
  const [repeat, setRepeat] = useState(false)

  function navigate(page) {
    navigation.navigate(page)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Ionicons name="exit-outline" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Play')}>
        <SimpleLineIcons name="social-spotify" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('GymAll')}>
        <MaterialCommunityIcons
          onPress={() => setRepeat(!repeat)}
          name={`repeat${repeat ? '' : '-off'}`}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )
}
