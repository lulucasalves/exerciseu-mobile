import { createSlice } from '@reduxjs/toolkit'

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    currentMusic: {
      image:
        'https://github.com/lulucasalves/exerciseu-mobile/blob/main/.github/covers/international.jpg?raw=true',
      playlist: 'PL6k9a6aYB2zk0qSbXR-ZEiwqgdHymsRtQ'
    }
  },
  reducers: {
    setMusic: (state, action) => {
      state.currentMusic = action.payload
    }
  }
})

export const { setMusic } = musicSlice.actions
const musicReducer = musicSlice.reducer

export default musicReducer
