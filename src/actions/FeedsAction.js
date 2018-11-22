import { httpGetFeeds, cachedFeeds } from '../utils/network';

export const GET_FEEDS_REQUEST = 'GET_FEEDS_REQUEST';
export const GET_FEEDS_SUCCESS = 'GET_FEEDS_SUCCESS';
export const GET_FEEDS_FAIL = 'GET_FEEDS_FAIL';

export const getFeeds = () => {
	return dispatch => {
		if (!cachedFeeds) {	
			dispatch({
				type: GET_FEEDS_REQUEST
			});

			httpGetFeeds(dispatch);
		} 
	}
}