import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

export function DashboardHeader() {
  const level = 10
  const offensive = 30
  const percentage = 20

  return (
    <View style={styles.container}>
      <View style={styles.userSession}>
        <Image
          style={styles.user}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/72206769?v=4'
          }}
        />
        <View style={styles.levelSession}>
          <View style={styles.levelLeague}>
            <Text style={styles.level}>Nível {level}</Text>
            <View style={styles.league} />
          </View>
          <View style={styles.barDiv}>
            <View style={styles.barGray} />
            <View style={[styles.barBlue, { width: `${percentage}%` }]} />
          </View>
        </View>
      </View>
      <View style={styles.offensive}>
        <MaterialCommunityIcons name="fire" size={30} color={theme.fire} />
        <Text style={styles.offensiveText}>{offensive}</Text>
      </View>
    </View>
  )
}
