import React, { Component } from 'react';

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

		const user = {
			username: this.inputName.current.value,
			password: this.inputPass.current.value
		}


		if (this.validate(user)) {
			const { captcha: { response } } = this.props;

			await this.props.createUser({ 
				...user, 
				'g-recaptcha-response': response
			})

			this.props.history.push('/');
		} else {
			console.log('submit error');
		}
	}
	validate({ username, password }) {
		const { captcha: { verified } } = this.props;

		if (!verified)
			return false;
		
		if (password.length < 6)
			return false;

		return true;
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