import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../styles/theme'
import { Login } from '../screens/Login/Login'
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
    </Navigator>
  )
}
