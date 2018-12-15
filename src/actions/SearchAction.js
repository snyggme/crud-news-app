export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export const searchFeeds = (value) => {

	const checkEquality = (str, search) => {
		let arr = search.split(' ');
		
		for(let i = 0; i < arr.length; i++) {
			if (str.match(arr[i]) !== null)
				return true
		}

		return false
	}

	return (dispatch, getState) => {
		const feeds = getState().news.feeds.filter(({ title }) => 
			checkEquality(title, value)
		)
		
		dispatch({
			type: SEARCH_COMPLETE,
			payload: feeds
		});
	}
}