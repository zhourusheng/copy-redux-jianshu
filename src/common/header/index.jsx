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

	getListArea() {
		return (
			<div></div>
		)
	}

  render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return (
			<HeaderWrapper>
			<Link to='/'>
				<Logo/>
			</Link>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				{
					login ? 
						<NavItem onClick={logout} className='right'>退出</NavItem> : 
						<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
				}
				<NavItem className='right'>
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch
							className={focused ? 'focused': ''}
							onFocus={() => handleInputFocus(list)}
							onBlur={handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
						&#xe614;
					</i>
					{this.getListArea()}
				</SearchWrapper>
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