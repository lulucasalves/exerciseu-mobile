import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { BarChart } from 'react-native-gifted-charts'
import { theme } from '../../styles/theme'
import { DashboardCard } from '../DashboardCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setCurrentPlay } from '../../store/play'

export function DashboardContent() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const data = [
    { value: 3, label: 'S', labelTextStyle: { color: theme.text } },
    { value: 2.5, label: 'T', labelTextStyle: { color: theme.text } },
    { value: 1.5, label: 'Q', labelTextStyle: { color: theme.text } },
    { value: 2, label: 'Q', labelTextStyle: { color: theme.text } },
    { value: 1.8, label: 'S', labelTextStyle: { color: theme.text } },
    { value: 1.2, label: 'S', labelTextStyle: { color: theme.text } },
    { value: 3, label: 'D', labelTextStyle: { color: theme.text } }
  ]

  const { trains } = useSelector((auth) => auth.train)

  function handleSelect(data) {
    dispatch(
      setCurrentPlay({
        title: data.name,
        totalTime: data.finish,
        xp: data.xp,
        id: data.id
      })
    )

    navigation.navigate('InitTrain')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.performance}>Desempenho</Text>
      <BarChart
        data={data}
        barWidth={15}
        noOfSections={3}
        barBorderRadius={5}
        frontColor={theme.primary}
        yAxisThickness={0}
        xAxisThickness={0}
        dashGap={9}
        initialSpacing={10}
        maxValue={3}
        height={120}
      />
      <Text style={styles.training}>Últimos treinos</Text>
      <FlatList
        data={trains.slice(0, 3)}
        renderItem={({ item }) => (
          <DashboardCard onPress={() => handleSelect(item)} data={item} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 270 }}
      />
    </View>
  )
}
