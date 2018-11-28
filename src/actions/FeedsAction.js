import { httpGetFeeds, httpPostFeed, cachedFeeds } from '../utils/network';

export const GET_FEEDS_REQUEST = 'GET_FEEDS_REQUEST';
export const GET_FEEDS_SUCCESS = 'GET_FEEDS_SUCCESS';
export const GET_FEEDS_FAIL = 'GET_FEEDS_FAIL';

export const POST_FEED_REQUEST = 'POST_FEED_REQUEST';
export const POST_FEED_SUCCESS = 'POST_FEED_SUCCESS';
export const POST_FEED_FAIL = 'POST_FEED_FAIL';

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

export const createFeed = (feed) => {
	return dispatch => {
		dispatch({
			type: POST_FEED_REQUEST
		});

		httpPostFeed(dispatch, feed);
	}
}