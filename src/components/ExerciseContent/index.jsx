import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TrainCard } from '../TrainCard'
import { styles } from './styles'
import { setEditExercises } from '../../store/exercise'
import { exerciseFinish, exerciseTime } from '../../utils/formatTime'
import { useState } from 'react'
import DraggableFlatList from 'react-native-draggable-flatlist'

export function ExerciseContent({ statusModal }) {
  const [dragging, setDragging] = useState(false)
  const { exercises, currentExercise } = useSelector((auth) => auth.exercise)
  const [data, setData] = useState(exercises)

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
      <Text style={styles.title}>{currentExercise.title}</Text>

      <View style={styles.textContainer}>
        <Text style={styles.totalTime}>
          {exerciseTime(currentExercise.totalTime)}
        </Text>
        <Text style={styles.xp}>{`+${currentExercise.xp}xp`}</Text>
      </View>
      <Text style={styles.finish}>{`Previsão de termino: ${exerciseFinish(
        currentExercise.totalTime
      )}`}</Text>

      <DraggableFlatList
        scrollEnabled={!dragging}
        showsVerticalScrollIndicator={false}
        data={data}
        onDragEnd={({ data }) => {
          setDragging(false)
          setData(data)
        }}
        onDragBegin={() => setDragging(true)}
        keyExtractor={(item) => item.id}
        renderItem={({ item, drag, isActive }) => (
          <TrainCard
            data={item}
            onPress={() => editExercise(item)}
            onLongPress={drag}
            disabled={isActive}
          />
        )}
        contentContainerStyle={{ paddingBottom: 500 }}
      />
    </View>
  )
}
