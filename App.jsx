import { StatusBar, LogBox, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Background } from './src/components/Background'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import {
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold
} from '@expo-google-fonts/work-sans'
import { Routes } from './src/routes'
import { theme } from './src/styles/theme'
import { Provider } from 'react-redux'
import store from './src/store'

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.'
])

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  const [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold
  })

  useMemo(() => {
    if (fontsLoaded) {
      setAppIsReady(true)
    }
  }, [fontsLoaded])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <Background>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.statusBar}
            translucent
          />
          <Routes />
        </Background>
      </Provider>
    </View>
  )
}
