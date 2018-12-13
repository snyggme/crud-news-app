import React, { Component } from 'react';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
	}
	async handleGoogleLogin() {
		await this.props.googleLogin();

		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<form id='login-form'>
				   	<input required type="email" id="email" placeholder="username" />
				    <input required type="password" id="password" placeholder="password" />
				    <button type="submit" id="login-btn">{this.props.text}</button>
				</form>
				<button id="login-with-google-btn" onClick={this.handleGoogleLogin}>Login with Google</button>
			</div>
		)	
	}
}

export default UserForm;