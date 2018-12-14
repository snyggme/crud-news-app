import React from 'react';
import { Link } from 'react-router-dom';
import NewsSearch from './NewsSearch';
import SignButton from './SignButton';
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
					<li className='flex-create'>
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
				<SignButton 
					logout={props.logout} 
					auth={props.auth}
				/>	
			</ul>
		</nav>
	)	
}

export default Navbar;