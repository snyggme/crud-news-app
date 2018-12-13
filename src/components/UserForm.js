import React from 'react';

const UserForm = (props) => {
	return (
		<form id='login-form'>
		   	<input required type="email" id="email" placeholder="username" />
		    <input required type="password" id="password" placeholder="password" />
		    <button type="submit" id="login-btn">{props.text}</button>
		    <button type="submit" id="login-with-google-btn">Login with Google</button>   
		</form>
	)
}

export default UserForm;