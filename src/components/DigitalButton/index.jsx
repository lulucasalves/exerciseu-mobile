import { TouchableHighlight, View, Text } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import * as LocalAuthentication from 'expo-local-authentication'
import * as Device from 'expo-device'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

export function DigitalButton(props) {
  const navigation = useNavigation()

  const [digitalLogin, setDigitalLogin] = useState(false)

  useEffect(() => {
    ;(async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      const hasPassword = await LocalAuthentication.isEnrolledAsync()

      if (hasPassword && compatible) {
        setDigitalLogin(true)
      }
    })()
  }, [])

  async function useDigital() {
    const compatible = await LocalAuthentication.hasHardwareAsync()
    const hasPassword = await LocalAuthentication.isEnrolledAsync()

    if (hasPassword && compatible) {
      const biometricAuth = await LocalAuthentication.authenticateAsync()

      if (biometricAuth) {
        const id = Device.osBuildFingerprint
        const name = Device.deviceName
        const product = Device.modelName
        const design = Device.designName
        const register = `${name}${product}exerciseu${id}${design}`
        const registerRendered = register
          .replace(/ /g, '')
          .replace(/-/g, 'v')
          .replace(/:/g, 'z')
          .toLowerCase()

        console.log(registerRendered)
        navigation.navigate('Home')
      }
    }
  }

  return (
    <>
      {digitalLogin && (
        <TouchableHighlight
          {...props}
          onPress={() => useDigital()}
          style={styles.btnClickContain}
          underlayColor={theme.primary}
        >
          <View style={styles.btnContainer}>
            <Ionicons name="finger-print" size={24} color="#fff" />
            <Text style={styles.btnText}>Entrar com a Digital</Text>
          </View>
        </TouchableHighlight>
      )}
    </>
  )
}
