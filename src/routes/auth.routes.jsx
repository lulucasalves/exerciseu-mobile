import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../styles/theme'
import { Login } from '../screens/Login'
import { Home } from '../screens/Home'
import { Start } from '../screens/Start'
import { Gym } from '../screens/Gym'
const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.background },
        headerShown: false
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Start" component={Start} />
      <Screen name="Gym" component={Gym} />
    </Navigator>
  )
}
