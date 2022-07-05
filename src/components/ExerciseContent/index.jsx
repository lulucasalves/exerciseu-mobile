import { FlatList, Text } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TrainCard } from '../TrainCard'
import { styles } from './styles'
import { setEditExercises } from '../../store/exercise'
import { BoardRepository } from 'react-native-draganddrop-board'

export function ExerciseContent({ statusModal }) {
  const time = '1:20:00h'
  const xp = 120
  const finish = '4:00am'

  const { exercises } = useSelector((auth) => auth.exercise)

  const dispatch = useDispatch()

  function editExercise(data) {
    dispatch(
      setEditExercises({
        time: data.time,
        id: data.id,
        name: data.name,
        rest: data.rest,
        quantity: data.quantity
      })
    )

    statusModal(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título do treino</Text>

      <View style={styles.textContainer}>
        <Text style={styles.totalTime}>{time}</Text>
        <Text style={styles.xp}>{`+${xp}xp`}</Text>
      </View>
      <Text style={styles.finish}>{`Previsão de termino: ${finish}`}</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <TrainCard data={item} onPress={() => editExercise(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 370 }}
      />
    </View>
  )
}
