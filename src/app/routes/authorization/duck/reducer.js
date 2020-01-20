import { authTypes } from "."

let token
if (!localStorage.getItem('token')) {
  token = null
} else {
  token = localStorage.getItem('token')
}


const initialState = {
  isLoading: false,
  message: {
    username: '',
    password: ''
  },
  token,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: {
          username: action.message.username || '',
          password: action.message.password || ''
        },
        token: action.token
      }
    case authTypes.AUTH_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        message: {
          username: '',
          password: ''
        },
        token: null
      }
    case authTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        token: null
      }
    case authTypes.AUTH_LOGOUT:
      return {
        isLoading: false,
        message: {
          username: '',
          password: ''
        },
        token: null,
      }
    default:
      return state
  }
}

export default authReducer