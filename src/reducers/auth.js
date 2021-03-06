import {
	GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAIL,
    LOGOUT,
    CAPTCHA_VERIFIED,
    POST_USER_REQUEST,
    POST_USER_SUCCESS,
    POST_USER_FAIL,
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAIL
} from '../actions/AuthAction';
import auth from '../utils/auth';

const initialState = {
	captcha:  {
		response: '',
		verified: false
	},
	isSigning: false,
	isSigned: auth.isSigned(),
	error: null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN_REQUEST:
			return {
				...state,
				isSigning: true
			}
		case GOOGLE_LOGIN_SUCCESS:
			auth.setBackendToken(action.payload.token);
			
			return {
				...state,
				captcha: {
					response: '',
					verified: false
				},
				isSigned: true,
				isSigning: false
			};
		case GOOGLE_LOGIN_FAIL:
			return {
				...state,
				isSigning: false,
				error: {
					msg: action.payload
				}
			}
		case LOGOUT:
			return {
				error: null,
				captcha: {
					response: '',
					verified: false
				},
				isSigning: false,
				isSigned: false
			}
		case CAPTCHA_VERIFIED:
			return {
				...state,
				captcha: {
					response: action.payload,
					verified: true
				}
			}
		case POST_USER_REQUEST:
			return {
				...state,
				isSigning: true
			}
		case POST_USER_SUCCESS:
			auth.signup({
				token: action.payload.token,
				username: action.payload.username
			});
			
			return {
				...state,
				captcha: {
					response: '',
					verified: false
				},
				isSigned: true,
				isSigning: false
			};
		case POST_USER_FAIL:
			return {
				...state,
				isSigning: false,
				error: {
					msg: action.payload
				}
			}
		case SIGNIN_USER_REQUEST:
			return {
				...state,
				isSigning: true
			}
		case SIGNIN_USER_SUCCESS:
			auth.signin({
				token: action.payload.token,
				username: action.payload.username
			});
			
			return {
				...state,
				isSigned: true,
				isSigning: false
			};
		case SIGNIN_USER_FAIL:
			return {
				...state,
				isSigning: false,
				error: {
					msg: action.payload
				}
			}
 		default:
			return state;
	}
}