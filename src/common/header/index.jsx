import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';


class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <Link to="/">
            <NavItem className='left active'>首页</NavItem>
          </Link>
          <NavItem className='left'>下载App</NavItem>
          {
            true ? 
              // onClick={logout}
							<NavItem  className='right'>退出</NavItem> : 
							<Link to='/login'>
                <NavItem className='right'>登陆</NavItem>
              </Link>
					}
          <NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
        </Nav>
        <Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
      </HeaderWrapper>
    )
  }
}

export default Header