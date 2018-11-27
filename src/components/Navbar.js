import React from 'react';
import { Link } from 'react-router-dom';
import NewsSearch from './NewsSearch';
import SignIn from './SignIn';
import logo from '../assets/logo.svg';

const Navbar = (props) => {
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
				<SignIn {...props} />			
			</ul>
		</nav>
	)	
}

export default Navbar;