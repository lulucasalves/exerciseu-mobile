import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { exerciseTime } from '../../utils/formatTime'

export function ProfileContent() {
  const username = 'Lucas Alves'
  const level = 10
  const medals = 3
  const league = 'Diamante'
  const time = 569
  const offensive = 30
  const howMuch = 300
  const percentage = 40

  return (
    <View style={styles.container}>
      <Image
        style={styles.user}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/72206769?v=4'
        }}
      />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.level}>Nível {level}</Text>
      <View style={styles.statistics}>
        <View style={styles.medalLeague}>
          <View>
            <Text style={styles.title}>Medalhas</Text>
            <View style={styles.medal}>
              <MaterialCommunityIcons
                name="medal-outline"
                size={25}
                color={theme.medal}
              />
              <Text style={[styles.data, { marginLeft: 5 }]}>{medals}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Liga</Text>
            <View style={styles.league}>
              <MaterialCommunityIcons
                name="cards-diamond-outline"
                size={20}
                color={theme.fire}
              />
              <Text style={[styles.data, { marginLeft: 5 }]}>{league}</Text>
            </View>
          </View>
        </View>
        <View style={styles.xpOffensive}>
          <View>
            <Text style={styles.title}>Tempo total</Text>
            <View style={styles.xp}>
              <Text style={styles.data}>{`${exerciseTime(time)}`}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Ofensiva</Text>
            <View style={styles.offensive}>
              <MaterialCommunityIcons
                name="fire"
                size={25}
                color={theme.fire}
              />
              <Text
                style={[styles.data, { marginLeft: 5 }]}
              >{`${offensive} dias`}</Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={styles.howMuch}
      >{`Faltam ${howMuch}xp para avançar de nível`}</Text>
      <View style={styles.barDiv}>
        <View style={styles.barGray} />
        <View style={[styles.barBlue, { width: `${percentage}%` }]} />
      </View>
    </View>
  )
}
