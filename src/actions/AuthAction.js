import auth from '../utils/auth';
import { getBackendToken } from '../utils/network';

export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const CAPTCHA_VERIFIED = 'CAPTCHA_VERIFIED';

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAIL = 'POST_USER_FAIL';

export const SIGNIN_USER_REQUEST = 'SIGNIN_USER_REQUEST';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAIL = 'SIGNIN_USER_FAIL';

export const googleLogin = () => {
	return async dispatch => {
		dispatch({
			type: GOOGLE_LOGIN_REQUEST
		});

		const token = await auth.googleSignin();

        await getBackendToken(
        	dispatch, 
        	{ token }, 
        	'/auth/google', 
        	GOOGLE_LOGIN_SUCCESS, 
        	GOOGLE_LOGIN_FAIL
        );
	} 
}

export const logout = () => {
	return dispatch => {
		auth.signout()

		dispatch({
			type: LOGOUT
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
	return async dispatch => {
		dispatch({
			type: POST_USER_REQUEST
		})

		await getBackendToken(
			dispatch, 
			user, 
			'/users', 
			POST_USER_SUCCESS,
			POST_USER_FAIL
		)
	}
}

export const SigninUser = (user) => {
	return async dispatch => {
		dispatch({
			type: SIGNIN_USER_REQUEST
		})

		await getBackendToken(
			dispatch, 
			user, 
			'/auth',
			SIGNIN_USER_SUCCESS,
			SIGNIN_USER_FAIL
		)
	}
}