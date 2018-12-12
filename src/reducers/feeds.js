import { 
	GET_FEEDS_REQUEST,
    GET_FEEDS_SUCCESS,
    GET_FEEDS_FAIL,
    POST_FEED_REQUEST,
    POST_FEED_SUCCESS,
    POST_FEED_FAIL,
    PUT_FEED_REQUEST,
    PUT_FEED_SUCCESS,
    PUT_FEED_FAIL,
    DELETE_FEED_REQUEST,
    DELETE_FEED_SUCCESS,
    DELETE_FEED_FAIL
} from '../actions/FeedsAction';


const initialState = {
	feeds: [],
	isLoading: true,
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
		case PUT_FEED_REQUEST:
			return {
				...state,
				error: '',
				isLoading: true
			}
		case PUT_FEED_SUCCESS:
			const { _id } = action.payload;

			const i = state.feeds.findIndex(feed => feed._id === _id)

			return {
				error: '',
				isLoading: false,
				feeds: [
					...state.feeds.slice(0, i),
					action.payload, 
					...state.feeds.slice(i + 1)
				]
			}
		case PUT_FEED_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
		case DELETE_FEED_REQUEST:
			return {
				...state,
				error: '',
				isLoading: true
			}
		case DELETE_FEED_SUCCESS:
			const id = action.payload;

			const index = state.feeds.findIndex(feed => feed._id === id)
			
			return {
				error: '',
				isLoading: false,
				feeds: [
					...state.feeds.slice(0, index),
					...state.feeds.slice(index + 1)
				]
			}
		case DELETE_FEED_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}	
		case POST_FEED_REQUEST:
			return {
				...state,
				error: '',
				isLoading: true
			}
		case POST_FEED_SUCCESS:
			return {
				error: '',
				isLoading: false,
				feeds: [
					...state.feeds,
					action.payload
				]
			}
		case POST_FEED_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}		
 		default:
			return state;
	}
}