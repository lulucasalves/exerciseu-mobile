import { StatusBar, LogBox } from 'react-native'
import React from 'react'
import { Background } from './src/components/Background'
import { useFonts } from 'expo-font'
import {
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold
} from '@expo-google-fonts/work-sans'
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes'
import { theme } from './src/styles/theme'
import { Provider } from 'react-redux'
import store from './src/store'

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.'
])

export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <Background>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.statusBar}
          translucent
        />
        <Routes />
      </Background>
    </Provider>
  )
}
