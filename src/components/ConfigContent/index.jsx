import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { ConfigCard } from '../ConfigCard'

export function ConfigContent() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            id: '1',
            name: 'Idioma',
            icon: (
              <Ionicons name="flag-outline" size={35} color={theme.muted} />
            ),
            func: 'exit'
          },
          {
            id: '2',
            name: 'Notificações',
            icon: (
              <Ionicons
                name="notifications-outline"
                size={35}
                color={theme.muted}
              />
            ),
            func: 'exit'
          },
          {
            id: '3',
            name: 'Informações pessoais',
            icon: (
              <Ionicons name="person-outline" size={35} color={theme.muted} />
            ),
            func: 'exit'
          },
          {
            id: '8',
            name: 'Preferências',
            icon: <Ionicons name="cog-outline" size={35} color={theme.muted} />,
            func: 'exit'
          },
          {
            id: '4',
            name: 'Login com digital',
            icon: (
              <Ionicons name="finger-print" size={35} color={theme.muted} />
            ),
            func: 'exit'
          },
          {
            id: '6',
            name: 'Sair',
            icon: (
              <Ionicons name="exit-outline" size={35} color={theme.muted} />
            ),
            func: 'exit'
          },
          {
            id: '7',
            name: 'Deletar conta',
            icon: (
              <Ionicons
                name="backspace-outline"
                size={35}
                color={theme.muted}
              />
            ),
            func: 'exit'
          }
        ]}
        renderItem={({ item }) => <ConfigCard data={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 146 }}
      />
    </View>
  )
}
