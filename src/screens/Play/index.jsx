import { useState } from 'react'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { ModalPlay } from '../../components/ModalPlay'
import { ModalTrain } from '../../components/ModalTrain'
import { ModalView } from '../../components/ModalView'
import { Navigation } from '../../components/Navigation'
import { PlayContent } from '../../components/PlayContent'
import { PlayHeader } from '../../components/PlayHeader'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { useSelector } from 'react-redux'

export function Play() {
  const [modal, setModal] = useState(false)
  const [modalCreate, setModalCreate] = useState(false)
  const { currentPlay } = useSelector((auth) => auth.play)

  function setModalState(bool) {
    setModal(bool)
  }

  function setModalCreateState(bool) {
    setModalCreate(bool)
  }

  return (
    <Background>
      <PlayHeader currentPlay={currentPlay} statusModal={setModalState} />
      <PlayContent currentPlay={currentPlay} />
      <Navigation />

      <ModalView height={220} visible={modal} statusModal={setModalState}>
        <ModalPlay
          currentPlay={currentPlay}
          statusModal={setModalState}
          modalCreate={setModalCreate}
        />
      </ModalView>
      <ModalView
        height={300}
        visible={modalCreate}
        statusModal={setModalCreateState}
      >
        <ModalTrain statusModal={setModalCreateState} />
      </ModalView>
      <TouchableOpacity style={styles.playFloat}>
        <Ionicons name="play" size={25} color="#fff" />
      </TouchableOpacity>
    </Background>
  )
}
