import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Background } from '../../components/Background'
import { InitContent } from '../../components/InitContent'
import { InitHeader } from '../../components/InitHeader'
import { ModalStretch } from '../../components/ModalStretch'
import { ModalPreparation } from '../../components/ModalPreparation'
import { ModalView } from '../../components/ModalView'
import { Navigation } from '../../components/Navigation'

export function InitTrain() {
  const [modal, setModal] = useState(false)
  const [modalPreparation, setModalPreparation] = useState(false)

  const { currentPlay } = useSelector((auth) => auth.play)

  function setModalState(bool) {
    setModal(bool)
  }

  function setModalStateP(bool) {
    setModalPreparation(bool)
  }

  return (
    <Background>
      <InitHeader currentPlay={currentPlay} />
      <InitContent
        currentPlay={currentPlay}
        statusModal={setModalState}
        preparationModal={setModalStateP}
      />
      <Navigation section="play" />

      <ModalView height={300} visible={modal} statusModal={setModalState}>
        <ModalStretch statusModal={setModalState} />
      </ModalView>
      <ModalView
        height={300}
        visible={modalPreparation}
        statusModal={setModalStateP}
      >
        <ModalPreparation statusModal={setModalStateP} />
      </ModalView>
    </Background>
  )
}
