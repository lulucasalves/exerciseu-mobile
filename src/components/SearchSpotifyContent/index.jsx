import { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import { TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getSearchMusics } from '../../services/searchMusics'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function SearchSpotifyContent() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([
    {
      id: '',
      name: '',
      artist: '',
      image: ''
    }
  ])

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={theme.muted}
        value={title}
        onChangeText={setTitle}
        style={[
          styles.input,
          { borderColor: title ? theme.primary : theme.gray }
        ]}
        placeholder="Adicione uma playlist pública do youtube"
      />
      <View style={styles.tracks}>
        {items.map((val) => {
          if (val.id !== '0') {
            return (
              <TouchableOpacity style={styles.music} key={val.id}>
                <Image
                  style={styles.image}
                  source={{
                    uri: val.image
                  }}
                />
                <View>
                  <Text style={styles.textMusic}>
                    {val.name.length < 25
                      ? val.name
                      : `${val.name.slice(0, 25)}...`}
                  </Text>
                  <Text style={styles.textArtist}>{val.artist}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        })}
      </View>
    </View>
  )
}
