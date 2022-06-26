import { Background } from '../../components/Background'
import { GymHeader } from '../../components/GymHeader'
import { Navigation } from '../../components/Navigation'
import { GymAllContent } from '../../components/GymAllContent'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function GymAll() {
  return (
    <Background>
      <GymHeader page="all" />
      <GymAllContent />
      <Navigation />

      <TouchableOpacity style={styles.playFloat}>
        <Ionicons name="add-sharp" size={30} color={theme.background} />
      </TouchableOpacity>
    </Background>
  )
}
