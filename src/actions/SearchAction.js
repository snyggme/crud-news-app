export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export const setSearchedFeeds = (result) => {
	return dispatch => {
		dispatch({
			type: SEARCH_COMPLETE,
			payload: result
		});
	}
}