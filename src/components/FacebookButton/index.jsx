import { TouchableHighlight, View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { Ionicons } from '@expo/vector-icons'

export function FacebookButton(props) {
  return (
    <TouchableHighlight
      {...props}
      style={styles.btnClickContain}
      underlayColor={theme.primary}
    >
      <View style={styles.btnContainer}>
        <Ionicons name="logo-facebook" size={24} color="#fff" />
        <Text style={styles.btnText}>Entrar com o Facebook</Text>
      </View>
    </TouchableHighlight>
  )
}
