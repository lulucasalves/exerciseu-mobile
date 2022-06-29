import { useState } from 'react'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { Navigation } from '../../components/Navigation'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { ExerciseHeader } from '../../components/ExerciseHeader'
import { ExerciseContent } from '../../components/ExerciseContent'

export function Exercise() {
  const [modal, setModal] = useState(false)

  function setModalState(bool) {
    setModal(bool)
  }

  return (
    <Background>
      <ExerciseHeader />
      <ExerciseContent />
      <Navigation />

      <TouchableOpacity style={styles.playFloat}>
        <Ionicons name="play" size={25} color={theme.background} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addFloat}>
        <Ionicons name="add" size={30} color={theme.background} />
      </TouchableOpacity>
    </Background>
  )
}
