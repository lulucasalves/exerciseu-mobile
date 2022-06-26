import { useState } from 'react'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { ModalPlay } from '../../components/ModalPlay'
import { ModalView } from '../../components/ModalView'
import { Navigation } from '../../components/Navigation'
import { PlayContent } from '../../components/PlayContent'
import { PlayHeader } from '../../components/PlayHeader'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

export function Play() {
  const [modal, setModal] = useState(false)

  function setModalState(bool) {
    setModal(bool)
  }

  return (
    <Background>
      <PlayHeader statusModal={setModalState} />
      <PlayContent />
      <Navigation />

      <ModalView height={610} visible={modal} statusModal={setModalState}>
        <ModalPlay />
      </ModalView>
      <TouchableOpacity style={styles.playFloat}>
        <Ionicons name="play" size={25} color={theme.background} />
      </TouchableOpacity>
    </Background>
  )
}
