import auth from '../utils/auth';
import { getBackendToken } from '../utils/network';

export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL';

export const GOOGLE_LOGOUT = 'GOOGLE_LOGOUT';

export const googleLogin = () => {
	return async dispatch => {
		dispatch({
			type: GOOGLE_LOGIN_REQUEST
		});

		const token = await auth.signIn();

        getBackendToken(dispatch, token);
	} 
}

export const googleLogout = () => {
	return dispatch => {
		auth.signOut()

		dispatch({
			type: GOOGLE_LOGOUT
		});
	} 
}