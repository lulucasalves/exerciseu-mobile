import { useState } from 'react'
import { AuthButtons } from '../../components/AuthButtons'
import { Background } from '../../components/Background'
import { LoginImage } from '../../components/LoginImage'
import { ModalDigital } from '../../components/ModalDigital'
import { ModalView } from '../../components/ModalView'

export function Login() {
  const [modal, setModal] = useState(false)

  function setModalState(bool) {
    setModal(bool)
  }
  return (
    <Background>
      <LoginImage />
      <AuthButtons stateModal={setModalState} />
      <ModalView height={480} visible={modal} statusModal={setModalState}>
        <ModalDigital stateModal={setModalState} />
      </ModalView>
    </Background>
  )
}
