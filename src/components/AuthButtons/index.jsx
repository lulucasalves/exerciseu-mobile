import { useNavigation } from '@react-navigation/native'
import { Button, View } from 'react-native'
import { DigitalButton } from '../DigitalButton'
import { FacebookButton } from '../FacebookButton'
import { GoogleButton } from '../GoogleButton'
import { styles } from './styles'

export function AuthButtons() {
  const navigation = useNavigation()

  function goToHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <GoogleButton onPress={() => goToHome()} />
      <FacebookButton onPress={() => goToHome()} />
      <DigitalButton onPress={() => goToHome()} />
    </View>
  )
}
