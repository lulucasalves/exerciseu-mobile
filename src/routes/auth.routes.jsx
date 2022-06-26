import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../styles/theme'
import { Login } from '../screens/Login'
import { Home } from '../screens/Home'
import { Play } from '../screens/Play'
import { GymAll } from '../screens/GymAll'
import { GymRecent } from '../screens/GymRecent'
import { GymExplore } from '../screens/GymExplore'
import { Configuration } from '../screens/Configuration'
import { Profile } from '../screens/Profile'
import { ChampionShip } from '../screens/Championship'
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
      <Screen name="Play" component={Play} />
      <Screen name="GymAll" component={GymAll} />
      <Screen name="GymRecent" component={GymRecent} />
      <Screen name="GymExplore" component={GymExplore} />
      <Screen name="Championship" component={ChampionShip} />
      <Screen name="Configuration" component={Configuration} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  )
}
