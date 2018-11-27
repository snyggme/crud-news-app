import { 
    GET_FEEDS_SUCCESS,
    GET_FEEDS_FAIL
} from '../actions/FeedsAction';
import {
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAIL
} from '../actions/AuthAction';

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

export const getBackendToken = async (dispatch, data) => {  
     try {
        const response = await fetch(`${API_ROOT}/auth/google`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: data })
        });

        if (response.ok) {
            const json = await response.json();

            dispatch({
                type: GOOGLE_LOGIN_SUCCESS,
                payload: json.token
            })
        } else {
            dispatch({
                type: GOOGLE_LOGIN_FAIL,
                error: true,
                payload: response.statusText
            })
        }
    } catch (e) {
        dispatch({
            type: GOOGLE_LOGIN_FAIL,
            error: true,
            payload: new Error(e).message
        })
    }
}
