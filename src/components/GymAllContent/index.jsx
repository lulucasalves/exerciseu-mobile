import { FlatList } from 'react-native'
import { View } from 'react-native'
import { GymAllCard } from '../GymAllCard'
import { styles } from './styles'

export function GymAllContent() {
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
          },
          { finish: '1 hora e 30 minutos', id: '5', name: 'Treino de Biceps' },
          {
            finish: '1 hora e 30 minutos',
            id: '6',
            name: 'Treino de fim de semana'
          },
          { finish: '1 hora e 30 minutos', id: '7', name: 'Treino de 2 horas' },
          { finish: '1 hora e 30 minutos', id: '8', name: 'Treino daora' },
          { finish: '1 hora e 30 minutos', id: '9', name: 'Treino normal' }
        ]}
        renderItem={({ item }) => (
          <GymAllCard data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 170, paddingTop: 5 }}
      />
    </View>
  )
}
