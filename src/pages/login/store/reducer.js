import * as actionTypes from './action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  login: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value)
    case actionTypes.LOGOUT:
      return state.set('login', action.value)
    default:
      return state
  }
}

export default reducer