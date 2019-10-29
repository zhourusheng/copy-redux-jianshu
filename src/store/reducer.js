import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'

// Redux 提供了一个combineReducers方法，用于 Reducer 的拆分
// 你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
const reducer = combineReducers({
  header: headerReducer,
  login: loginReducer,
  home: homeReducer
})

export default reducer