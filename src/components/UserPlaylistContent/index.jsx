import { useEffect, useState } from 'react'
import { Alert, Image, Text } from 'react-native'
import { TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { setMusic } from '../../store/music'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons'

export function UserPlaylistContent() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([])
  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      const customPlaylists = await AsyncStorage.getItem('userPlaylists')
      if (customPlaylists) {
        setItems(JSON.parse(customPlaylists))
      }
    })()
  }, [update])

  function changeMusic(image, playlist) {
    dispatch(setMusic({ image, playlist }))
  }

  async function AddNewMusic() {
    if (title.includes('list=')) {
      let [, playlist] = title.split('list=')

      if (playlist.includes('&')) {
        const [formattedPlaylist] = playlist.split('&')
        playlist = formattedPlaylist
      }
      setTitle('')

      const customPlaylists = await AsyncStorage.getItem('userPlaylists')

      if (customPlaylists) {
        let listPlaylists = JSON.parse(customPlaylists)
        if (listPlaylists.includes(playlist)) {
          createAlert(
            'Playlist Repetida',
            'Esta playlist já existe na sua lista'
          )
        } else {
          listPlaylists.push(playlist)
          await AsyncStorage.setItem(
            'userPlaylists',
            JSON.stringify(listPlaylists)
          )
        }
      } else {
        await AsyncStorage.setItem('userPlaylists', JSON.stringify([playlist]))
      }
    } else {
      createAlert(
        'Link Inválido',
        'Não foi possível adicionar este item a sua playlist'
      )
    }

    setUpdate(!update)
  }

  function createAlert(title, description) {
    Alert.alert(
      title,
      description,
      [
        {
          text: 'ok'
        }
      ],
      { cancelable: true }
    )
  }

  async function removeItem(item) {
    const customPlaylists = await AsyncStorage.getItem('userPlaylists')
    let listPlaylists = JSON.parse(customPlaylists)
    const newPlaylist = listPlaylists.filter((val) => {
      return val !== item
    })

    await AsyncStorage.setItem('userPlaylists', JSON.stringify(newPlaylist))
    setUpdate(!update)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={theme.muted}
          value={title}
          onChangeText={setTitle}
          style={[
            styles.input,
            { borderColor: title ? theme.primary : theme.gray }
          ]}
          placeholder="Adicione o link da sua playlist"
        />
        <TouchableOpacity style={styles.buttonSubmit} onPress={AddNewMusic}>
          <Text style={styles.textSubmit}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.tracks}>
          {items.length > 0
            ? items.map((val, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      changeMusic(
                        'https://github.com/lulucasalves/exerciseu-mobile/blob/main/.github/covers/custom.jpg?raw=true',
                        val
                      )
                      navigation.navigate('Train')
                    }}
                    style={styles.music}
                    key={i}
                  >
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://github.com/lulucasalves/exerciseu-mobile/blob/main/.github/covers/custom.jpg?raw=true'
                      }}
                    />
                    <View style={styles.configMusic}>
                      <View>
                        <Text style={styles.textMusic}>
                          {`Playlist ${i + 1}`}
                        </Text>
                        <Text style={styles.textArtist}>
                          {val.slice(0, 10)}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => removeItem(val)}
                        style={styles.trash}
                      >
                        <Ionicons
                          name="trash-outline"
                          size={25}
                          color={theme.red}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                )
              })
            : null}
        </View>
      </View>
    </ScrollView>
  )
}
