import { 
	httpGetFeeds, 
	httpPostFeed, 
	httpPutFeed, 
	httpDeleteFeed,
	cachedFeeds 
} from '../utils/network';

export const GET_FEEDS_REQUEST = 'GET_FEEDS_REQUEST';
export const GET_FEEDS_SUCCESS = 'GET_FEEDS_SUCCESS';
export const GET_FEEDS_FAIL = 'GET_FEEDS_FAIL';

export const POST_FEED_REQUEST = 'POST_FEED_REQUEST';
export const POST_FEED_SUCCESS = 'POST_FEED_SUCCESS';
export const POST_FEED_FAIL = 'POST_FEED_FAIL';

export const PUT_FEED_REQUEST = 'PUT_FEED_REQUEST';
export const PUT_FEED_SUCCESS = 'PUT_FEED_SUCCESS';
export const PUT_FEED_FAIL = 'PUT_FEED_FAIL';

export const DELETE_FEED_REQUEST = 'DELETE_FEED_REQUEST';
export const DELETE_FEED_SUCCESS = 'DELETE_FEED_SUCCESS';
export const DELETE_FEED_FAIL = 'DELETE_FEED_FAIL';

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
	return async dispatch => {
		dispatch({
			type: POST_FEED_REQUEST
		});

		return await httpPostFeed(dispatch, feed);
	}
}

export const updateFeed = (feed, id) => {
	return async dispatch => {
		dispatch({
			type: PUT_FEED_REQUEST
		});

		await httpPutFeed(dispatch, feed, id);
	}
}

export const deleteFeed = (id) => {
	return dispatch => {
		dispatch({
			type: DELETE_FEED_REQUEST
		});

		httpDeleteFeed(dispatch, id);
	}
}