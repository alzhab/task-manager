import { authTypes } from "."

// AUTH_LOGIN_START
// AUTH_LOGIN_SUCCESS
// AUTH_LOGIN_ERROR

const authLoginStart = () => {
  return { type: authTypes.AUTH_LOGIN_START }
}

const authLoginSuccess = (message) => {
  if (message.token) {
    localStorage.setItem('token', message.token)
  }
  return { type: authTypes.AUTH_LOGIN_SUCCESS, token: message.token, message }
}

const authLoginError = (err) => {
  return { type: authTypes.AUTH_LOGIN_ERROR, payload: err }
}

const authLogout = () => {
  localStorage.removeItem('token')

  return { type: authTypes.AUTH_LOGOUT }
}

export {
  authLoginStart,
  authLoginSuccess,
  authLoginError,
  authLogout
}