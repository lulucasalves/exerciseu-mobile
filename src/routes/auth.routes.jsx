import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../styles/theme'
import { Login } from '../screens/Login/Login'
import { Home } from '../screens/Home/Home'
import { Start } from '../screens/Start/Start'
const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: theme.background }
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Start" component={Start} />
    </Navigator>
  )
}
