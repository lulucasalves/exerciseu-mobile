import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPlay } from '../../store/play'
import { SelectCard } from '../SelectCard'
import { styles } from './styles'

export function SelectContent() {
  const { trains } = useSelector((auth) => auth.train)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function handleSelect(data) {
    dispatch(
      setCurrentPlay({
        title: data.name,
        totalTime: data.finish,
        xp: data.xp,
        id: data.id
      })
    )

    navigation.navigate('Play')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={trains}
        renderItem={({ item }) => (
          <SelectCard data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 170 }}
      />
    </View>
  )
}
