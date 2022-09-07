import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'
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
import { Exercise } from '../screens/Exercise'
import { SelectTrain } from '../screens/SelectTrain'
import { InitTrain } from '../screens/InitTrain'
import { Train } from '../screens/Train'
import { FinishTrain } from '../screens/FinishTrain'
import { Youtube } from '../screens/Youtube'
import { UserPlaylists } from '../screens/UserPlaylists'
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
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Play"
        component={Play}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="GymAll"
        component={GymAll}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="GymRecent"
        component={GymRecent}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="GymExplore"
        component={GymExplore}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Championship"
        component={ChampionShip}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Configuration"
        component={Configuration}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Profile"
        component={Profile}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Exercise"
        component={Exercise}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Select"
        component={SelectTrain}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="InitTrain"
        component={InitTrain}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Train"
        component={Train}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="Youtube"
        component={Youtube}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="UserPlaylists"
        component={UserPlaylists}
      />
      <Screen
        options={{
          animationEnabled: false
        }}
        name="FinishTrain"
        component={FinishTrain}
      />
    </Navigator>
  )
}
