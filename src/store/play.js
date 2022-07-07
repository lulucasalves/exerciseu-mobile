import { createSlice } from '@reduxjs/toolkit'

const playSlice = createSlice({
  name: 'play',
  initialState: {
    currentPlay: {
      title: 'Treino de pernas',
      totalTime: 110,
      xp: 600,
      id: '13231'
    }
  },
  reducers: {
    setCurrentPlay: (state, action) => {
      state.currentPlay = action.payload
    }
  }
})

export const { setCurrentPlay } = playSlice.actions
const playReducer = playSlice.reducer

export default playReducer
