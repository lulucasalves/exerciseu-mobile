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
      const { audio, vibrate, jump, spotify } = action.payload
      const { preparation, stretch } = state.config
      state.config = {
        audio,
        vibrate,
        jump,
        spotify,
        preparation,
        stretch
      }
      state.currentPlay['xp'] += stretch / 5
      state.currentPlay['totalTime'] += stretch
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
