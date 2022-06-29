import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { GymAllCard } from '../GymAllCard'
import { styles } from './styles'

export function GymAllContent() {
  const navigation = useNavigation()
  const { trains } = useSelector((auth) => auth.train)

  function handleSelect() {
    navigation.navigate('Exercise')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={trains}
        renderItem={({ item }) => (
          <GymAllCard data={item} onPress={() => handleSelect()} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 170, paddingTop: 5 }}
      />
    </View>
  )
}
