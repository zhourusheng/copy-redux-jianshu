import * as actionTypes from './action-types'
import { fromJS } from 'immutable'

// 写在reducer种的state的 默认值，初始值
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

/***
 * Immutable.js 常用API
 * 
 * 1.fromJS() 将一个js数据转换为Immutable类型的数据
 * 2.toJS() 将一个Immutable数据转换为JS类型的数据
 * 3.set() 设置第一层key、index的值
 * 4.get() getIn() 获取数据结构中的数据
 * 5.merge() 浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，就数据中已存在的属性用新数据中的覆盖
 * 
 * */ 

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}

export default reducer