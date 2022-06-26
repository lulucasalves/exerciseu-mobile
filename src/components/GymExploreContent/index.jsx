import { FlatList } from 'react-native'
import { View } from 'react-native'
import { GymExploreCard } from '../GymExploreCard'
import { styles } from './styles'

export function GymExploreContent() {
  function handleSelect(val) {
    console.log(val)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { finish: '1 hora e 30 minutos', id: '1', name: 'Treino de braços' },
          { finish: '1 hora e 30 minutos', id: '2', name: 'Treino de pernas' },
          { finish: '1 hora e 30 minutos', id: '3', name: 'Cardio' },
          {
            finish: '1 hora e 30 minutos',
            id: '4',
            name: 'Treino de Panturrilha'
          }
        ]}
        renderItem={({ item }) => (
          <GymExploreCard data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 170, paddingTop: 5 }}
      />
    </View>
  )
}
