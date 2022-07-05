import { useState } from 'react'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { ModalExercise } from '../../components/ModalExercise'
import { ModalView } from '../../components/ModalView'
import { Navigation } from '../../components/Navigation'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { ExerciseHeader } from '../../components/ExerciseHeader'
import { ExerciseContent } from '../../components/ExerciseContent'
import { useDispatch } from 'react-redux'
import { setEditExercises } from '../../store/exercise'

export function Exercise() {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()

  function setModalState(bool) {
    setModal(bool)
  }

  return (
    <Background>
      <ExerciseHeader />
      <ExerciseContent statusModal={setModalState} />
      <Navigation />

      <ModalView height={500} visible={modal} statusModal={setModalState}>
        <ModalExercise statusModal={setModalState} />
      </ModalView>
      <TouchableOpacity style={styles.playFloat}>
        <Ionicons name="play" size={25} color={theme.background} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModal(true)
          dispatch(
            setEditExercises({
              time: 0,
              id: '0',
              name: '',
              rest: false,
              quantity: 0
            })
          )
        }}
        style={styles.addFloat}
      >
        <Ionicons name="add" size={30} color={theme.background} />
      </TouchableOpacity>
    </Background>
  )
}
