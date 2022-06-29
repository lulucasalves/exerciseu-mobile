import api from '../services/api'

export function setAuthToken(passToken) {
  localStorage.setItem('token', passToken)
  api.defaults.headers.common.authorization = `Bearer ${passToken}`
}

export function deleteAuthToken() {
  localStorage.removeItem('token')
}
