import auth from '../utils/auth';
import { getBackendToken } from '../utils/network';

export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL';
export const GOOGLE_LOGOUT = 'GOOGLE_LOGOUT';

export const CAPTCHA_VERIFIED = 'CAPTCHA_VERIFIED';

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAIL = 'POST_USER_FAIL';

export const googleLogin = () => {
	return async dispatch => {
		dispatch({
			type: GOOGLE_LOGIN_REQUEST
		});

		const token = await auth.signIn();

        await getBackendToken(dispatch, token);
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

export const verifyCaptcha = (r) => {
	return dispatch => {
		dispatch({
			type: CAPTCHA_VERIFIED,
			payload: r
		});
	}
}

export const createUser = (user) => {
	return dispatch => {
		dispatch({
			type: POST_USER_REQUEST
		})
		console.log(user);
	}
}