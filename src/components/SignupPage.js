import React, { Component } from 'react';
import UserForm from './UserForm';
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
		return (
			<div>
			   	<UserForm 
			   		text='Sign up'
			   		googleLogin={this.props.googleLogin}
			   		history={this.props.history}
			   		captchaVerified={this.props.auth.captchaVerified}
			   		captchaResponse={this.props.auth.captchaResponse}
			   		createUser={this.props.createUser}
			   	/>
			    <Recaptcha
					className='recaptcha'
			        sitekey="6LcP-4AUAAAAAI9IWY23igRLZCk3l1MCYD2ATg0n"
			        render="explicit"
			        verifyCallback={this.verifyCallback}
			    />
			</div>
		)	
	}
}

export default SignUp;

