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
  const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-playback-state,user-read-private,playlist-modify-public,user-modify-playback-state,user-read-recently-played,user-read-playback-position`
  const navigation = useNavigation()

  function navigate(page) {
    navigation.navigate(page)
  }

  function connectSpotify() {
    async function setToken() {
      const { type, params } = await AuthSession.startAsync({
        authUrl
      })

      if (type === 'success' && !params.error) {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${params.access_token}`

        await AsyncStorage.setItem('token', params.access_token)
        navigation.navigate('Spotify')
      }
    }

    ;(async () => {
      const token = AsyncStorage.getItem('token')
      if (!token) {
        await setToken()
      } else {
        api
          .get('me')
          .then(() => navigation.navigate('Spotify'))
          .catch(async () => {
            await setToken()
          })
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
