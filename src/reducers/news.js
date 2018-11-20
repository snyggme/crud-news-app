import { GET_NEWS_SUCCESS } from '../actions/NewsAction';
import { GET_NEWS_REQUEST } from '../actions/NewsAction';
import { GET_NEWS_FAIL } from '../actions/NewsAction';

const initialState = {

};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS_REQUEST:

		case GET_NEWS_SUCCESS:

		case GET_NEWS_FAIL:

 		default:
			return state;
	}
}