import { 
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAIL
} from '../actions/UserAction';

const initialState = {

};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:

		case GET_USER_SUCCESS:

		case GET_USER_FAIL:

 		default:
			return state;
	}
}