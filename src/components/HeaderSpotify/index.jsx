import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../styles/theme'

export function HeaderSpotify({ title }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Train')}>
        <Ionicons name="arrow-undo" size={30} color={theme.text} />
      </TouchableOpacity>
      <View style={styles.logo}>
        <SimpleLineIcons
          name="social-youtube"
          size={30}
          color={theme.primary}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}
