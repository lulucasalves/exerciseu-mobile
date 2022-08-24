import { combineReducers, createStore } from 'redux'
import auth from './auth'
import train from './train'
import exercise from './exercise'
import play from './play'
import music from './music'

const rootReducer = combineReducers({
  auth,
  train,
  exercise,
  play,
  music
})

const store = createStore(rootReducer)

export default store
