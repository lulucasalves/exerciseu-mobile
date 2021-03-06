import { createSlice } from '@reduxjs/toolkit'

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    currentExercise: {
      title: '',
      totalTime: 0,
      xp: 0,
      id: '0'
    },
    exercises: [
      { time: 150, id: '1', name: 'Flexão', rest: false, quantity: 30 },
      { time: 60, id: '2', name: 'Descanso', rest: true, quantity: 0 },
      { time: 30, id: '3', name: 'Agachamento', rest: false, quantity: 20 },
      { time: 5 * 60, id: '4', name: 'Flexão', rest: false, quantity: 0 },
      { time: 60, id: '5', name: 'Descanso', rest: true, quantity: 0 },
      { time: 30, id: '6', name: 'Agachamento', rest: false, quantity: 0 }
    ],
    editExercise: {
      time: 0,
      id: '0',
      name: '',
      rest: false,
      quantity: 0
    }
  },
  reducers: {
    setCurrentTrain: (state, action) => {
      state.currentExercise = action.payload
    },
    addExercises: (state, action) => {
      state.exercises.push(action.payload)
    },
    setEditExercises: (state, action) => {
      state.editExercise = action.payload
    }
  }
})

export const { setCurrentTrain, addExercises, setEditExercises } =
  exerciseSlice.actions
const exerciseReducer = exerciseSlice.reducer

export default exerciseReducer
