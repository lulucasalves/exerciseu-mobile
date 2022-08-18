import { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import { TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getSearchMusics } from '../../services/searchMusics'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { api } from '../../services/api'

const spotifyApi = new SpotifyWebApi()

export function SearchSpotifyContent() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([
    {
      id: '0',
      image: '',
      name: '',
      artist: [''],
      uri: ''
    }
  ])
  const [currentUri, setCurrentUri] = useState('')

  useEffect(() => {
    ;(async () => {
      if (currentUri.length > 1) {
        await api
          .get('me/player/devices')
          .then((response) => console.log(response.data.devices))
          .catch((err) => console.log(err))
      }
    })()
  }, [currentUri])

  useEffect(() => {
    ;(async () => {
      if (title.length > 1) {
        await getSearchMusics(title).then((res) => {
          setItems([
            {
              id: '0',
              image: '',
              name: '',
              artist: [''],
              uri: ''
            }
          ])
          res.map((val) => {
            if (val.id) {
              let artists = []
              val.artists.map(({ name }) => {
                artists.push(name)
              })

              setItems((old) => [
                ...old,
                {
                  id: val.id,
                  name: val.name,
                  image: val.album.images[2].url,
                  artists,
                  uri: val.external_urls.spotify
                }
              ])
            }
          })
        })
      }
    })()
  }, [title])

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
        placeholder="Procure a música desejada"
      />
      <View style={styles.tracks}>
        {items.map((val) => {
          if (val.id !== '0') {
            return (
              <TouchableOpacity
                style={styles.music}
                onPress={() => setCurrentUri(val.uri)}
                key={val.id}
              >
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
                  <Text style={styles.textArtist}>
                    {val.artists.slice(0, 2).join(', ')}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }
        })}
      </View>
    </View>
  )
}
