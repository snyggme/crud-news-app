import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

class LoginPage extends Component {
	render() {
		const { isSigning } = this.props.auth;

		if (isSigning)
			return <div className='loading' />
		
		return (
		    <div>
		    	<UserForm 
		    		text='Login' 
		    		googleLogin={this.props.googleLogin}
		    		history={this.props.history}
		    		captcha={this.props.auth}
		    		withCaptcha={false}
		    		signinUser={this.props.signinUser}
		    	/>
			    <p className='signup-q'>
			    	Don't have an account? Sign up
			    	<Link to='/signup'> here</Link>
			    </p>
		    </div>
	  	);
	}
}

export default LoginPage;