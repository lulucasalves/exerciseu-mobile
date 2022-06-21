import { TouchableHighlight, View, Text } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

export function DigitalButton(props) {
  return (
    <TouchableHighlight
      {...props}
      style={styles.btnClickContain}
      underlayColor={theme.secondary}
    >
      <View style={styles.btnContainer}>
        <Ionicons name="finger-print" size={24} color="#fff" />
        <Text style={styles.btnText}>Entrar com a Digital</Text>
      </View>
    </TouchableHighlight>
  )
}
