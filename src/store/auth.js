import { createSlice } from '@reduxjs/toolkit'
import { deleteAuthToken } from '../utils/deleteAuthToken'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: {
      user: '',
      cellphone: '',
      email: '',
      first_name: '',
      last_name: '',
      mentor: '',
      hash: ''
    },
    isLogin: false
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
      state.isLogin = true
    },
    logoutCurrentUser: (state) => {
      deleteAuthToken()

      state.currentUser = {
        user: '',
        cellphone: '',
        email: '',
        first_name: '',
        last_name: '',
        mentor: '',
        hash: ''
      }
      state.isLogin = false
    }
  }
})

export const { setCurrentUser, logoutCurrentUser } = authSlice.actions
const authReducer = authSlice.reducer

export default authReducer
