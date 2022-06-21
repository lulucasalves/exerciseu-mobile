import { TouchableHighlight, View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { Ionicons } from '@expo/vector-icons'

export function GoogleButton(props) {
  return (
    <TouchableHighlight
      {...props}
      style={styles.btnClickContain}
      underlayColor={theme.secondary}
    >
      <View style={styles.btnContainer}>
        <Ionicons name="logo-google" size={24} color="#fff" />
        <Text style={styles.btnText}>Entrar com o Google</Text>
      </View>
    </TouchableHighlight>
  )
}
