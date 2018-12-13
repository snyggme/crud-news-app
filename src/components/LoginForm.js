import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import auth from '../utils/auth';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
		this.verifyCallback = this.verifyCallback.bind(this);
	}
	recaptchaLoaded() {
		console.log('recaptch loaded');
	}
	verifyCallback(response) {
		console.log(response);
	}
	render() {
		return (
		    <div>
		    	<form id='login-form'>
				   	<input required type="email" id="email" placeholder="username" />
				    <input required type="password" id="password" placeholder="password" />
				    <button type="submit" id="submit-btn">Submit</button>
			    </form>
			    <Recaptcha
		            sitekey="6LcP-4AUAAAAAI9IWY23igRLZCk3l1MCYD2ATg0n"
		            render="explicit"
		            onloadCallback={this.recaptchaLoaded}
		            verifyCallback={this.verifyCallback}
		          />
		    </div>
	  	);
	}
}

export default LoginForm;