import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { GymAllCard } from '../GymAllCard'
import { setCurrentTrain } from '../../store/exercise'
import { styles } from './styles'
import DraggableFlatList from 'react-native-draggable-flatlist'

export function GymAllContent({ setEditMode, setModal, data, setData }) {
  const [dragging, setDragging] = useState(false)

  const navigation = useNavigation()
  const dispatch = useDispatch()

  function handleSelect(data) {
    dispatch(
      setCurrentTrain({
        title: data.name,
        totalTime: data.finish,
        xp: data.xp,
        id: data.id
      })
    )
    navigation.navigate('Exercise')
  }

  return (
    <View style={styles.container}>
      <DraggableFlatList
        scrollEnabled={!dragging}
        showsVerticalScrollIndicator={false}
        data={data}
        onDragEnd={({ data }) => {
          setDragging(false)
          setData(data)
        }}
        onDragBegin={() => {
          setDragging(true)
          setEditMode(true)
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, drag, isActive }) => (
          <GymAllCard
            data={item}
            onPress={() => handleSelect(item)}
            key={item.key}
            onLongPress={drag}
            disabled={isActive}
            setModal={setModal}
          />
        )}
        contentContainerStyle={{ paddingBottom: 250, paddingTop: 5 }}
      />
    </View>
  )
}
