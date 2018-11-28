import {
	GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAIL,
    GOOGLE_LOGOUT
} from '../actions/AuthAction';
import auth from '../utils/auth';

const initialState = {
	isSigning: false,
	isSigned: auth.isSigned(),
	error: ''
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN_REQUEST:
			return {
				...state,
				isSigning: true
			}
		case GOOGLE_LOGIN_SUCCESS:
			auth.setBackendToken(action.payload);
			
			return {
				...state,
				isSigned: auth.isSigned(),
				isSigning: false
			};
		case GOOGLE_LOGIN_FAIL:
			return {
				isSigning: false,
				error: action.payload
			}
		case GOOGLE_LOGOUT:
			return {
				...state,
				isSigning: false,
				isSigned: auth.isSigned()
			}
 		default:
			return state;
	}
}