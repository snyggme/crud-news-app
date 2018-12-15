import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const SignButton = (props) => {
	const { isSigning, isSigned } = props.auth;

	return (
		<li className='flex-login'>
			{  isSigning
				? 'Loading...' 
				: isSigned 
					? (
						<div>
							{`${auth.getUsername()} | `} 
							<span onClick={props.logout}>Logout</span>
						</div>
					)
					: <Link to='/login'>Login</Link>
			}
		</li>	
	)
}

export default SignButton;