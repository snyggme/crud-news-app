import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NewsSearch from './NewsSearch';
import SignButton from './SignButton';
import logo from '../assets/logo.svg';

import { logout } from '../actions/AuthAction';
import { searchFeeds } from '../actions/SearchAction';

const Navbar = (props) => {
	const { isSigned } = props.auth;

	return (
		<nav className='flex-nav'>
			<ul>
				<li className='flex-logo'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />
						Super Awesome News
					</Link>
				</li>
				{ isSigned &&
					<li className='flex-create'>
						<Link to='/news/create'>
							Create
						</Link>
					</li>	
				}
				<li className='flex-news'>
					<Link to='/news'>
						News
					</Link>
				</li>
				<NewsSearch 
					className='flex-search' 
					searchFeeds={props.searchFeeds}
					history={props.history} />
				<SignButton 
					logout={props.logout} 
					auth={props.auth}
				/>	
			</ul>
		</nav>
	)	
}

const mapStateToProps = store => {
    return {
        auth: store.auth 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        searchFeeds: (feeds) => dispatch(searchFeeds(feeds))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);