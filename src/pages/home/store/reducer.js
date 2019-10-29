import * as actionTypes from './action-types'

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state
    default:
      return state
  }
}

export default reducer