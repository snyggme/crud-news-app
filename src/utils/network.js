import { 
    GET_FEEDS_SUCCESS,
    GET_FEEDS_FAIL,
    POST_FEED_SUCCESS,
    POST_FEED_FAIL,
    PUT_FEED_SUCCESS,
    PUT_FEED_FAIL,
    DELETE_FEED_SUCCESS,
    DELETE_FEED_FAIL
} from '../actions/FeedsAction';
import auth from './auth';

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

export const httpPostFeed = async (dispatch, feed) => {
    try {
        const response = await fetch(`${API_ROOT}/feeds`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': auth.getBackendToken()
            },
            body: JSON.stringify(feed)
        });

        if (response.ok) {
            const json = await response.json();

            dispatch({
                type: POST_FEED_SUCCESS,
                payload: json.feed
            })
            
            return json.feed._id
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: POST_FEED_FAIL,
            error: true,
            payload: new Error(e).message
        })
    }
}

export const httpPutFeed = async (dispatch, feed, id) => {
    try {
        const response = await fetch(`${API_ROOT}/feeds/${id}`, {  
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': auth.getBackendToken()
            },
            body: JSON.stringify(feed)
        });

        if (response.ok) {
            const json = await response.json();

            dispatch({
                type: PUT_FEED_SUCCESS,
                payload: json.feed
            })
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: PUT_FEED_FAIL,
            error: true,
            payload: new Error(e).message
        })
    }
}

export const httpDeleteFeed = async (dispatch, id) => {
    try {
        const response = await fetch(`${API_ROOT}/feeds/${id}`, {  
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': auth.getBackendToken()
            }
        });

        if (response.ok) {
            const json = await response.json();
            
            dispatch({
                type: DELETE_FEED_SUCCESS,
                payload: json._id
            })
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: DELETE_FEED_FAIL,
            error: true,
            payload: new Error(e).message
        })
    }
}

export const getBackendToken = async (dispatch, body, endpoint, success, fail) => {  
    try {
        const response = await fetch(`${API_ROOT}${endpoint}`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const json = await response.json();

            dispatch({
                type: success,
                payload: {
                    token: json.token,
                    username: body.username
                }
            })
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: fail,
            error: true,
            payload: new Error(e).message
        })
    }
}