import React, { Component } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
 
class SignUp extends Component {
	constructor(props) {
		super(props);

		this.verifyCallback = this.verifyCallback.bind(this);
	}
	verifyCallback(response) {
		this.props.verifyCaptcha(response);
	}
	render() {
		const { isSigning } = this.props.auth;

		if (isSigning)
			return <div className='loading' />

		return (
			<div>
			   	<UserForm 
			   		text='Sign up'
			   		googleLogin={this.props.googleLogin}
			   		history={this.props.history}
			   		captcha={this.props.auth.captcha}
			   		createUser={this.props.createUser}
			   		withCaptcha={true}
			   	/>
			    <Recaptcha
					className='recaptcha'
			        sitekey="6LcP-4AUAAAAAI9IWY23igRLZCk3l1MCYD2ATg0n"
			        render="explicit"
			        verifyCallback={this.verifyCallback}
			    />
			    <p className='signup-q'>
			    	Already have an account? Login
			    	<Link to='/login'> here</Link>
			    </p>
			</div>
		)	
	}
}

export default SignUp;

