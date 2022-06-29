import { createSlice } from '@reduxjs/toolkit'

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    currentExercise: {
      title: '',
      totalTime: '',
      xp: ''
    },
    exercises: [
      { time: 5 * 60, id: '1', name: 'Flexão', type: 1 },
      { time: 60, id: '2', name: '', type: 0 },
      { time: 30, id: '3', name: 'Agachamento', type: 2 },
      { time: 5 * 60, id: '4', name: 'Flexão', type: 1 },
      { time: 60, id: '5', name: '', type: 0 },
      { time: 30, id: '6', name: 'Agachamento', type: 2 }
    ]
  },
  reducers: {
    setCurrentExercise: (state, action) => {
      state.currentExercise = action.payload
    },
    addExercises: (state, action) => {
      state.exercises.push(action)
    }
  }
})

export const { setCurrentExercise, addExercises } = exerciseSlice.actions
const exerciseReducer = exerciseSlice.reducer

export default exerciseReducer
