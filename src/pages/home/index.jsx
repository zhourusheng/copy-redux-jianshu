import React from 'react';
import './index.scss'
import { connect } from 'react-redux'
import { action } from './store'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends React.Component {
  render() {
    return (
      <div className="HomeWrapper">
        <div className="HomeLeft">
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </div>
        <div className="HomeRight">
          <Recommend />
          <Writer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)