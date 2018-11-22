import { 
    GET_FEEDS_SUCCESS,
    GET_FEEDS_FAIL
} from '../actions/FeedsAction';

export let cachedFeeds = false;

const API_ROOT = 'http://localhost:5000/api/v1';

export const httpGetFeeds = async (dispatch) => {
    try {
        const response = await fetch(`${API_ROOT}/feeds`);

        if (response.ok) {
            const json = await response.json();

            cachedFeeds = true;

            dispatch({
                type: GET_FEEDS_SUCCESS,
                payload: json.feeds
            })
        } else {
            throw new Error(response.status);
        }
    } catch (e) {
        dispatch({
            type: GET_FEEDS_FAIL,
            error: true,
            payload: new Error(e).message
        })
    }
}
