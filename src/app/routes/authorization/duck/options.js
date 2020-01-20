import { authActions } from "."
import { authLoginSuccess, authLoginError } from "./actions"
import Axios from "axios";

const authLogin = (data) => {
  const form = new FormData();
  form.set('username', data.username);
  form.set('password', data.password);
  return dispatch => {
    dispatch(authActions.authLoginStart())

    // Axios instance не хотел принимать данные так что придется на прямую
    Axios({ method: 'post', url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/login/?developer=alzhan2', data: form }).then(res => {
      setTimeout(() => {
        dispatch(authActions.authLogout())
      }, 86400 * 1000)

      dispatch(authLoginSuccess(res.data.message))
    }).catch(err => {
      dispatch(authLoginError(err))
    })
  }
}

export {
  authLogin
}