import { Text, View } from 'react-native'
import { styles } from './styles'
import { BarChart } from 'react-native-gifted-charts'
import { theme } from '../../styles/theme'
import { DashboardCard } from '../DashboardCard'

export function DashboardContent() {
  const data = [
    { value: 3, label: 'S' },
    { value: 2.5, label: 'T' },
    { value: 1.5, label: 'Q' },
    { value: 2, label: 'Q' },
    { value: 1.8, label: 'S' },
    { value: 1.2, label: 'S' },
    { value: 3, label: 'D' }
  ]

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
      <DashboardCard train="Treino de pernas" time="30m" finish="7:00h" />
      <DashboardCard train="Treino de pernas" time="30m" finish="7:00h" />
      <DashboardCard train="Treino de pernas" time="30m" finish="7:00h" />
    </View>
  )
}
