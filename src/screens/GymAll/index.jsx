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
import { GymEditHeader } from '../../components/GymEditHeader'
import { useSelector } from 'react-redux'

export function GymAll() {
  const [modal, setModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [data, setData] = useState(trains)
  const { trains } = useSelector((auth) => auth.train)

  function setModalState(bool) {
    setModal(bool)
  }

  return (
    <Background>
      {editMode ? (
        <GymEditHeader
          oldData={trains}
          setData={setData}
          setEditMode={setEditMode}
        />
      ) : (
        <GymHeader page="all" />
      )}
      <GymAllContent
        data={data}
        setData={setData}
        setEditMode={setEditMode}
        setModal={setModal}
      />
      <Navigation />

      <ModalView height={260} visible={modal} statusModal={setModalState}>
        <ModalTrain statusModal={setModalState} />
      </ModalView>
      <TouchableOpacity onPress={() => setModal(true)} style={styles.playFloat}>
        <Ionicons name="add-sharp" size={30} color={theme.background} />
      </TouchableOpacity>
    </Background>
  )
}
