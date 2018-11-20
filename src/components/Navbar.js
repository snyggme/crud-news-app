import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsSearch from './NewsSearch';
import logo from '../assets/logo.svg';

class Navbar extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {

	}
	render() {
		return (
			<nav className='flex-nav'>
				<ul>
					<li className='flex-logo'>
						<Link to='/news'>
							<img className='logo' src={logo} alt="logo" />
							Super Awesome News
						</Link>
					</li>
					<NewsSearch className='flex-search' />
					<li className='flex-login'>
						<div onClick={this.handleClick}> 
							Sign in
						</div>
					</li>
				</ul>
			</nav>
		)	
	}
}

export default Navbar;