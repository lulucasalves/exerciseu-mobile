import { View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function ConfigHeader({ page }) {
  const navigation = useNavigation()

  function navigate(route) {
    navigation.navigate(route)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        activeOpacity={0.9}
        style={[
          styles.div,
          {
            backgroundColor:
              page === 'profile' ? theme.background : theme.primary
          }
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: page === 'profile' ? theme.primary : theme.background
            }
          ]}
        >
          Perfil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('Configuration')}
        activeOpacity={0.9}
        style={[
          styles.div,
          {
            backgroundColor:
              page === 'config' ? theme.background : theme.primary
          }
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: page === 'config' ? theme.primary : theme.background
            }
          ]}
        >
          Configurações
        </Text>
      </TouchableOpacity>
    </View>
  )
}
