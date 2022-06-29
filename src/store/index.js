import { combineReducers, createStore } from 'redux'
import auth from './auth'
import train from './train'
import exercise from './exercise'

const rootReducer = combineReducers({
  auth,
  train,
  exercise
})

const store = createStore(rootReducer)

export default store
