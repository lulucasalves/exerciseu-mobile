import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const playSlice = createSlice({
  name: 'play',
  initialState: {
    currentPlay: {
      title: 'Treino de pernas',
      totalTime: 110,
      xp: 600,
      id: '13231'
    },
    config: {
      audio: 1,
      vibrate: 1,
      preparation: 10,
      jump: 1,
      stretch: 0,
      spotify: 1
    }
  },
  reducers: {
    setCurrentPlay: (state, action) => {
      state.currentPlay = action.payload
    },
    setPlayConfig: (state, action) => {
      // const { audio, vibrate, jump, spotify } = action.payload
      // const { preparation, stretch } = state.config
      // state.config = {
      //   audio,
      //   vibrate,
      //   jump,
      //   spotify,
      //   preparation,
      //   stretch
      // }
      // state.currentPlay['xp'] += stretch / 5
      // state.currentPlay['totalTime'] += stretch
      // await AsyncStorage.setItem(audio ? 1 : 0, 'audio')
      // await AsyncStorage.setItem(vibrate ? 1 : 0, 'vibrate')
      // await AsyncStorage.setItem(jump ? 1 : 0, 'jump')
      // await AsyncStorage.setItem(spotify ? 1 : 0, 'spotify')
      // await AsyncStorage.setItem(preparation, 'preparation')
      // await AsyncStorage.setItem(stretch, 'stretch')
    },
    preferencesStretch: (state, action) => {
      state.config['stretch'] = action.payload
    },
    preferencesPreparation: (state, action) => {
      state.config['preparation'] = action.payload
    }
  }
})

export const {
  preferencesPreparation,
  setCurrentPlay,
  preferencesStretch,
  setPlayConfig
} = playSlice.actions
const playReducer = playSlice.reducer

export default playReducer
