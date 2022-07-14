import { useState } from 'react'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { ModalExercise } from '../../components/ModalExercise'
import { ModalView } from '../../components/ModalView'
import { Navigation } from '../../components/Navigation'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ExerciseHeader } from '../../components/ExerciseHeader'
import { ExerciseContent } from '../../components/ExerciseContent'
import { useDispatch, useSelector } from 'react-redux'
import { setEditExercises } from '../../store/exercise'
import { useNavigation } from '@react-navigation/native'
import { setCurrentPlay } from '../../store/play'

export function Exercise() {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { currentExercise } = useSelector((auth) => auth.exercise)

  function setModalState(bool) {
    setModal(bool)
  }

  function initTrain(data) {
    dispatch(
      setCurrentPlay({
        title: data.title,
        totalTime: data.totalTime,
        xp: data.xp,
        id: data.id
      })
    )

    navigation.navigate('InitTrain')
  }

  return (
    <Background>
      <ExerciseHeader />
      <ExerciseContent statusModal={setModalState} />
      <Navigation section="gym" />

      <ModalView height={550} visible={modal} statusModal={setModalState}>
        <ModalExercise statusModal={setModalState} />
      </ModalView>
      <TouchableOpacity
        onPress={() => initTrain(currentExercise)}
        style={styles.playFloat}
      >
        <Ionicons name="play" size={25} color="#fff" />
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
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </Background>
  )
}
