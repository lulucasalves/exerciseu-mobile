import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { GymExploreCard } from '../GymExploreCard'
import { styles } from './styles'

export function GymExploreContent() {
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
          <GymExploreCard data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 170, paddingTop: 5 }}
      />
    </View>
  )
}
