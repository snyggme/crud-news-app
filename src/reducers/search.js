import { SEARCH_COMPLETE } from '../actions/SearchAction';

const initialState = {
	feeds: []
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_COMPLETE:
			return {
				feeds: action.payload
			}
 		default:
			return state;
	}
}