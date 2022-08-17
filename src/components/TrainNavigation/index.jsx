import { Linking, TouchableOpacity, View } from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as AuthSession from 'expo-auth-session'
import { api } from '../../services/api'

export function TrainNavigation({ repeat, setRepeat, spotify }) {
  const CLIENT_ID = '95dd42314e4947e7ae812e604a54fa76'
  const REDIRECT_URI = 'https://auth.expo.io/@lulucasalves/exerciseu'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'
  const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
  const navigation = useNavigation()

  function navigate(page) {
    navigation.navigate(page)
  }

  function connectSpotify() {
    ;(async () => {
      const { type, params } = await AuthSession.startAsync({
        authUrl
      })

      if (type === 'success' && !params.error) {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${params.access_token}`

        api
          .get(`search?q=name:costagold&type=track&include_external=audio`)
          .then(({ data }) => {
            const dataCurrent = data.tracks.items[0]
            console.log(dataCurrent.external_urls.spotify)
            const id = dataCurrent.id
            const image = dataCurrent.images[2]
            const name = dataCurrent.name
            const artists = dataCurrent.artists[0]
          })
          .catch((err) => console.log(err))
      }
    })()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Ionicons name="exit-outline" size={25} color="#fff" />
      </TouchableOpacity>
      {spotify && (
        <TouchableOpacity onPress={() => connectSpotify()}>
          <SimpleLineIcons name="social-spotify" size={25} color="#fff" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => setRepeat(!repeat)}>
        <MaterialCommunityIcons
          name={`repeat${repeat ? '' : '-off'}`}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )
}
