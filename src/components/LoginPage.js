import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import auth from '../utils/auth';

class LoginForm extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
		    <div>
		    	<UserForm 
		    		text='Login' 
		    		googleLogin={this.props.googleLogin}
		    		history={this.props.history}
		    	/>
			    <p className='signup-q'>
			    	Don't have an account? Sign up
			    	<Link to='/signup'> here</Link>
			    </p>
		    </div>
	  	);
	}
}

export default LoginForm;