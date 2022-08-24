import { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import { TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import * as playlists from '../../data/playlists.json'

export function SearchSpotifyContent() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([
    {
      name: '',
      image:
        'https://github.com/lulucasalves/exerciseu-mobile/blob/main/.github/covers/8d.jpg?raw=true',
      list: []
    }
  ])

  useEffect(() => {
    setItems(playlists.data)
  }, [])

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholderTextColor={theme.muted}
        value={title}
        onChangeText={setTitle}
        style={[
          styles.input,
          { borderColor: title ? theme.primary : theme.gray }
        ]}
        placeholder="Adicione sua playlist do youtube"
      />
      <View style={styles.tracks}>
        <Text style={styles.musicTitle}>Músicas Internacionais</Text>
        {items.map((val) => {
          if (val.id !== '0') {
            return (
              <TouchableOpacity style={styles.music} key={val.name}>
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
                  <Text
                    style={styles.textArtist}
                  >{`${val.list.length} Playlists`}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        })}
      </View>
    </ScrollView>
  )
}
