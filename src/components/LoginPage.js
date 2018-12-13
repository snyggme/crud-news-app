import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import auth from '../utils/auth';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.verifyCallback = this.verifyCallback.bind(this);
	}
	verifyCallback(response) {
		console.log(response);
	}
	render() {
		return (
		    <div>
		    	<UserForm text='Login' />
			    <p className='signup-q'>Don't have an account? Sign up <Link to='/signup'>here</Link></p>
		    </div>
	  	);
	}
}

export default LoginForm;