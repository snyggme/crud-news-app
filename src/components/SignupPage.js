import React, { Component } from 'react';
import UserForm from './UserForm';
import Recaptcha from 'react-recaptcha';
 
class SignUp extends Component {
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
			   	<UserForm text='Sign up' />
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

