import { createSlice } from '@reduxjs/toolkit'

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    currentExercise: {
      title: '',
      totalTime: '',
      xp: '',
      id: '1'
    },
    exercises: [
      { time: 5 * 60, id: '1', name: 'Flexão', rest: false, quantity: 30 },
      { time: 60, id: '2', name: '', rest: true, quantity: 0 },
      { time: 30, id: '3', name: 'Agachamento', rest: false, quantity: 20 },
      { time: 5 * 60, id: '4', name: 'Flexão', rest: false, quantity: 0 },
      { time: 60, id: '5', name: '', rest: true, quantity: 0 },
      { time: 30, id: '6', name: 'Agachamento', rest: false, quantity: 0 }
    ]
  },
  reducers: {
    setCurrentExercise: (state, action) => {
      state.currentExercise = action.payload
    },
    addExercises: (state, action) => {
      state.exercises.push(action.payload)
    }
  }
})

export const { setCurrentExercise, addExercises } = exerciseSlice.actions
const exerciseReducer = exerciseSlice.reducer

export default exerciseReducer
