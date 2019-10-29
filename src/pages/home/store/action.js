import Axios from "axios" 
import * as actionTypes from './action-types'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list,
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    Axios.get('api/home.json').then(res => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    Axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data 
			dispatch(addHomeList(result, page + 1)) 
		}) 
  }
}

// 如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
// () => ({...})
export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
})