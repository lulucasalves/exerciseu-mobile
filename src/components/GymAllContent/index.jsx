import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { GymAllCard } from '../GymAllCard'
import { styles } from './styles'

export function GymAllContent() {
  const navigation = useNavigation()
  const { trains } = useSelector((auth) => auth.train)
  const [train, setTrain] = useState()

  useEffect(() => {
    setTrain(trains)
  }, [trains])

  function handleSelect() {
    navigation.navigate('Exercise')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={train}
        renderItem={({ item }) => (
          <GymAllCard
            data={item}
            onPress={() => handleSelect()}
            key={item.key}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 170, paddingTop: 5 }}
      />
    </View>
  )
}
