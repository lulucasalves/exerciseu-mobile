import { View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { TouchableOpacity } from 'react-native'

export function ConfigHeader({ page }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
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
      <TouchableOpacity
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
    </View>
  )
}
