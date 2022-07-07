import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setCurrentTrain } from '../../store/exercise'
import { setEditTrain } from '../../store/train'
import { styles } from './styles'

export function ModalPlay({ statusModal, modalCreate, currentPlay }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function handleSelect(data) {
    statusModal(false)

    dispatch(
      setCurrentTrain({
        title: data.title,
        totalTime: data.totalTime,
        xp: data.xp,
        id: data.id
      })
    )
    navigation.navigate('Exercise')
  }

  function create() {
    statusModal(false)

    dispatch(
      setEditTrain({
        id: '0',
        name: ''
      })
    )

    modalCreate(true)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleSelect(currentPlay)}
        style={[styles.option, { borderBottomWidth: 1 }]}
      >
        <Text style={styles.optText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          statusModal(false)
          navigation.navigate('Select')
        }}
        style={[styles.option, { borderBottomWidth: 1 }]}
      >
        <Text style={styles.optText}>Trocar de treino</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => create()} style={styles.option}>
        <Text style={styles.optText}>Criar novo treino</Text>
      </TouchableOpacity>
    </View>
  )
}
