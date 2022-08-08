import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function FinishContent() {
  const navigation = useNavigation()
  const data = { xp: 200, trainName: 'Treino de Pernas', level: 25 }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.congratulation}>Parabéns você terminou!</Text>
        <Text style={styles.trainName}>{data.trainName}</Text>
        <Ionicons name="trophy" size={150} color={theme.yellow} />
        <Text style={styles.xp}>+{data.xp}xp</Text>
        <Text style={styles.level}>Nível {data.level}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Voltar a tela inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Championship')}
        >
          <Text style={styles.buttonText}>Ver minha classificação</Text>
        </TouchableOpacity>
        <Text style={styles.comment}>
          Verifique sua classificação, você pode ter melhorado seu desempenho!
        </Text>
      </View>
    </>
  )
}
