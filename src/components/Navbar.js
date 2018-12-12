import React from 'react';
import { Link } from 'react-router-dom';
import NewsSearch from './NewsSearch';
import SignIn from './SignIn';
import auth from '../utils/auth';
import logo from '../assets/logo.svg';

const Navbar = (props) => {
	const signed = auth.isSigned();

	return (
		<nav className='flex-nav'>
			<ul>
				<li className='flex-logo'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />
						Super Awesome News
					</Link>
				</li>
				<li className='flex-news'>
					<Link to='/news'>
						News
					</Link>
				</li>
				{ signed &&
					<li className='flex-news'>
						<Link to='/news/create'>
							Create
						</Link>
					</li>	
				}
				<NewsSearch 
					className='flex-search' 
					feeds={props.news.feeds}
					setSearchedFeeds={props.setSearchedFeeds}
					history={props.history} />
				<SignIn {...props} />			
			</ul>
		</nav>
	)	
}

export default Navbar;