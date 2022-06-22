import { View, ImageBackground } from 'react-native'
import { styles } from './styles'
import LogoWhite from '../../assets/logoWhite.svg'

export function LoginImage() {
  return (
    <>
      <View style={styles.overlay} />
      <ImageBackground
        source={require('../../assets/initialImage.jpg')}
        resizeMode="cover"
        style={styles.container}
      >
        <LogoWhite style={styles.logo} />
      </ImageBackground>
    </>
  )
}
