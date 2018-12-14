import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const SignButton = (props) => {
	const signed = auth.isSigned();

	return (
		<li className='flex-login'>
			{ 
				signed 
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