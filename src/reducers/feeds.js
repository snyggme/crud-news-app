import { GET_FEEDS_SUCCESS } from '../actions/FeedsAction';
import { GET_FEEDS_REQUEST } from '../actions/FeedsAction';
import { GET_FEEDS_FAIL } from '../actions/FeedsAction';

const initialState = {
	feeds: [],
	isLoading: false,
	error: ''
};

export const feedsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FEEDS_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case GET_FEEDS_SUCCESS:
			return {
				feeds: action.payload,
				isLoading: false,
				error: ''
			}
		case GET_FEEDS_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
 		default:
			return state;
	}
}