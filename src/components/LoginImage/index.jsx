import { View, ImageBackground } from 'react-native'
import { styles } from './styles'
import LogoWhite from '../../assets/logoWhite.svg'

export function LoginImage() {
  const image = {
    uri: 'https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

  return (
    <>
      <View style={styles.overlay} />
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}
      >
        <LogoWhite style={styles.logo} />
      </ImageBackground>
    </>
  )
}
