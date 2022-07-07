import { combineReducers, createStore } from 'redux'
import auth from './auth'
import train from './train'
import exercise from './exercise'
import play from './play'

const rootReducer = combineReducers({
  auth,
  train,
  exercise,
  play
})

const store = createStore(rootReducer)

export default store
