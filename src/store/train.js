import { createSlice } from '@reduxjs/toolkit'

const trainSlice = createSlice({
  name: 'train',
  initialState: {
    trains: [
      {
        finish: 150,
        id: '1',
        name: 'Treino de braços',
        xp: 300
      },
      {
        finish: 120,
        id: '2',
        name: 'Treino de pernas',
        xp: 200
      },
      {
        finish: 32,
        id: '3',
        name: 'Cardio',
        xp: 400
      },
      {
        finish: 100,
        id: '4',
        name: 'Treino de braços',
        xp: 250
      },
      {
        finish: 50,
        id: '5',
        name: 'Treino de pernas',
        xp: 689
      },
      {
        finish: 64,
        id: '6',
        name: 'Cardio',
        xp: 263
      }
    ],
    editTrain: { name: '', id: '0' }
  },
  reducers: {
    addTrain: (state, action) => {
      state.trains.push(action.payload)
    },
    setEditTrain: (state, action) => {
      state.editTrain = action.payload
    }
  }
})

export const { addTrain, setEditTrain } = trainSlice.actions
const trainReducer = trainSlice.reducer

export default trainReducer
