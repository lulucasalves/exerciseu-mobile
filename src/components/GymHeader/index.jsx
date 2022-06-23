import { View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function GymHeader({ page }) {
  const navigation = useNavigation()

  function navigate(route) {
    navigation.navigate(route)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('GymAll')}
        activeOpacity={0.9}
        style={[
          styles.div,
          {
            backgroundColor: page === 'all' ? theme.background : theme.primary
          }
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: page === 'all' ? theme.primary : theme.background
            }
          ]}
        >
          Todos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('GymRecent')}
        activeOpacity={0.9}
        style={[
          styles.div,
          {
            backgroundColor:
              page === 'recent' ? theme.background : theme.primary
          }
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: page === 'recent' ? theme.primary : theme.background
            }
          ]}
        >
          Recentes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('GymExplore')}
        activeOpacity={0.9}
        style={[
          styles.div,
          {
            backgroundColor:
              page === 'explore' ? theme.background : theme.primary
          }
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: page === 'explore' ? theme.primary : theme.background
            }
          ]}
        >
          Explorar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
