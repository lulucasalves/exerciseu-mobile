import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': 'pt-BR'
  },
  baseURL: 'https://api.spotify.com/v1/'
})

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
      return value
    }
    return null
  } catch (e) {
    return null
  }
}

api.interceptors.request.use(async (config) => {
  const token = await getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
