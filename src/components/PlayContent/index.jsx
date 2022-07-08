import { FlatList, Text } from 'react-native'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { exerciseFinish, exerciseTime } from '../../utils/formatTime'
import { TrainCard } from '../TrainCard'
import { styles } from './styles'

export function PlayContent({ currentPlay }) {
  const { exercises } = useSelector((auth) => auth.exercise)

  function handleSelect(val) {}

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.totalTime}>
          {exerciseTime(currentPlay.totalTime)}
        </Text>
        <Text style={styles.xp}>{`+${currentPlay.xp}xp`}</Text>
      </View>
      <Text style={styles.finish}>{`Previsão de termino: ${exerciseFinish(
        currentPlay.totalTime
      )}`}</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <TrainCard data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 350 }}
      />
    </View>
  )
}
