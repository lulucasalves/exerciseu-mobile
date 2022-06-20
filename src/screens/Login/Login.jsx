import { Text, View } from 'react-native'
import { Background } from '../../components/Background'
import { styles } from './styles'

export function Login() {
  return (
    <Background>
      <View style={styles.container}>
        <Text>Olá</Text>
      </View>
    </Background>
  )
}
