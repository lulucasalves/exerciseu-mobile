import { createSlice } from '@reduxjs/toolkit'

const trainSlice = createSlice({
  name: 'train',
  initialState: {
    trains: [
      {
        finish: '1 hora e 30 minutos',
        id: '1',
        name: 'Treino de braços'
      },
      {
        finish: '2 horas e 2 minutos',
        id: '2',
        name: 'Treino de pernas'
      },
      {
        finish: '40 minutos',
        id: '3',
        name: 'Cardio'
      },
      {
        finish: '1 hora e 30 minutos',
        id: '4',
        name: 'Treino de braços'
      },
      {
        finish: '2 horas e 2 minutos',
        id: '5',
        name: 'Treino de pernas'
      },
      {
        finish: '40 minutos',
        id: '6',
        name: 'Cardio'
      }
    ]
  },
  reducers: {
    addTrain: (state, action) => {
      state.trains.push(action)
    }
  }
})

export const { addTrain } = trainSlice.actions
const trainReducer = trainSlice.reducer

export default trainReducer
