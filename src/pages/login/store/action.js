import * as actionType from './action-types'
import Axios from 'axios'

const changeLogin = () => ({
  type: actionType.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: actionType.LOGOUT,
  value: false
})

export const login = (accout, password) => {
  return (dispatch) => {
    Axios.get('/api/login.json?account=' + accout + '&password=' + password).then(res => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败')
      }
    })
  }
}