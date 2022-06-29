import { Background } from '../../components/Background'
import { GymHeader } from '../../components/GymHeader'
import { Navigation } from '../../components/Navigation'
import { GymAllContent } from '../../components/GymAllContent'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { useState } from 'react'
import { ModalView } from '../../components/ModalView'
import { ModalTrain } from '../../components/ModalTrain'

export function GymAll() {
  const [modal, setModal] = useState(false)

  function setModalState(bool) {
    setModal(bool)
  }

  return (
    <Background>
      <GymHeader page="all" />
      <GymAllContent />
      <Navigation />

      <ModalView height={350} visible={modal} statusModal={setModalState}>
        <ModalTrain statusModal={setModalState} />
      </ModalView>
      <TouchableOpacity onPress={() => setModal(true)} style={styles.playFloat}>
        <Ionicons name="add-sharp" size={30} color={theme.background} />
      </TouchableOpacity>
    </Background>
  )
}
