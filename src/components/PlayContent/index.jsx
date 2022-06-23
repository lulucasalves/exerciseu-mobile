import { FlatList, Text } from 'react-native'
import { View } from 'react-native'
import { TrainCard } from '../TrainCard'
import { styles } from './styles'

export function PlayContent() {
  const time = '1:20:00h'
  const xp = 120
  const finish = '4:00am'

  function handleSelect(val) {
    console.log(val)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.totalTime}>{time}</Text>
        <Text style={styles.xp}>{`+${xp}xp`}</Text>
      </View>
      <Text style={styles.finish}>{`Previsão de termino: ${finish}`}</Text>
      <FlatList
        data={[
          { time: 5 * 60, id: '1', name: 'Flexão', type: 1 },
          { time: 60, id: '2', name: '', type: 0 },
          {
            time: 30,
            id: '3',
            name: 'Agachamento',
            type: 2
          },
          { time: 5 * 60, id: '4', name: 'Flexão', type: 1 },
          { time: 60, id: '5', name: '', type: 0 },
          {
            time: 30,
            id: '6',
            name: 'Agachamento',
            type: 2
          },
          { time: 5 * 60, id: '7', name: 'Flexão', type: 1 },
          { time: 60, id: '8', name: '', type: 0 },
          {
            time: 30,
            id: '10',
            name: 'Agachamento',
            type: 2
          },
          { time: 5 * 60, id: '9', name: 'Flexão', type: 1 }
        ]}
        renderItem={({ item }) => (
          <TrainCard data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 270 }}
      />
    </View>
  )
}
