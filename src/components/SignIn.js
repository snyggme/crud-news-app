import React from 'react';
import auth from '../utils/auth';

const SignIn = (props) => {
	const { isSigning, isSigned } = props.auth;

	return (
		<li className='flex-login'>
			{ isSigning 
				? <div>Loading...</div>
				: isSigned 
					?
						<div> 
							{auth.getUsername()}
							<span onClick={props.googleLogout}> | Logout</span>
						</div>
					: 
						<div> 
							<span onClick={props.googleLogin}>Sign in</span>
						</div>
			}
		</li>			
	)	
}

export default SignIn;