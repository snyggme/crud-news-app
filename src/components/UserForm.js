import React, { Component } from 'react';
import auth from '../utils/auth';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textTooltip: '',
			showTooltip: false
		}

		this.inputName = React.createRef();
		this.inputPass = React.createRef();

		this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	async handleGoogleLogin() {
		await this.props.googleLogin();

		this.props.history.push('/');
	}
	async handleSubmit(e) {
		e.preventDefault();

		const { withCaptcha } = this.props;

		const user = {
			username: this.inputName.current.value,
			password: this.inputPass.current.value
		}

		const vresults = this.validate(user);

		if (withCaptcha) {
			if (vresults.isvalid) {
				const { captcha: { response } } = this.props;

				await this.props.createUser({ 
					...user, 
					'g-recaptcha-response': response
				})
			} else {
				console.log(vresults.error);
			}
		} else {
			if (vresults.isvalid) {
				await this.props.signinUser(user)
			} else {
				console.log(vresults.error);
			}
		}

		if (auth.isSigned())
			this.props.history.push('/');
		else 
			console.log('auth error')
	}
	validate({ username, password }) {
		const { withCaptcha, captcha: { verified } } = this.props;

		if (withCaptcha) {
			if (!verified)
				return {
					isvalid: false,
					error: 'reCAPTCHA is not verified'
				};
			
			if (password.length < 6 )
				return {
					isvalid: false,
					error: 'password need to be more than 6 characters'
				};
		}
		
		return {
			isvalid: true,
			error: ''
		};
	}
	render() {
		return (
			<div>
				<form id='login-form' onSubmit={this.handleSubmit}>
				   	<input 
				   		required 
				   		ref={this.inputName} 
				   		type="name" 
				   		id="email" 
				   		placeholder="username"
				   	/>
				    <input 
				    	required 
				    	ref={this.inputPass}
				    	type="password" 
				    	id="password" 
				    	placeholder="password" 
				    />
				    <button type="submit" id="login-btn">{this.props.text}</button>
				</form>
				<button 
					id="login-with-google-btn" 
					onClick={this.handleGoogleLogin}>
					Login with Google
				</button>
			</div>
		)	
	}
}

export default UserForm;