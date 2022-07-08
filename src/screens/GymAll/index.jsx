import { Background } from '../../components/Background'
import { GymHeader } from '../../components/GymHeader'
import { Navigation } from '../../components/Navigation'
import { GymAllContent } from '../../components/GymAllContent'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { useState } from 'react'
import { ModalView } from '../../components/ModalView'
import { ModalTrain } from '../../components/ModalTrain'
import { GymEditHeader } from '../../components/GymEditHeader'
import { useDispatch, useSelector } from 'react-redux'
import { setEditTrain } from '../../store/train'

export function GymAll() {
  const [modal, setModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const { trains } = useSelector((auth) => auth.train)
  const [data, setData] = useState(trains)
  const dispatch = useDispatch()

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

      <ModalView height={300} visible={modal} statusModal={setModalState}>
        <ModalTrain statusModal={setModalState} />
      </ModalView>
      <TouchableOpacity
        onPress={() => {
          setModal(true)
          dispatch(
            setEditTrain({
              time: 0,
              id: '0',
              name: '',
              rest: false,
              quantity: 0
            })
          )
        }}
        style={styles.playFloat}
      >
        <Ionicons name="add-sharp" size={30} color="#fff" />
      </TouchableOpacity>
    </Background>
  )
}
