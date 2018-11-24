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

export const authWithGoogle = async (data) => {  
     try {
        console.log(data)
        const response = await fetch(`${API_ROOT}/auth/google`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Headers': 'x-access-token',
                "x-access-token": {token: data}
            }
        });

        if (response.ok) {
            const json = await response.json();
            console.log(json)
                // dispatch({
                //     type: POST_LOGIN_SUCCESS,
                //     payload: json.data.id

                // dispatch({
                //     type: POST_LOGIN_FAIL,
                //     error: true,
                //     payload: json.message
                // })
        } else {
            console.log(response.statusText);
        }
    } catch (e) {
        console.log(e);
        // form.reset();

        // dispatch({
        //     type: POST_LOGIN_FAIL,
        //     error: true,
        //     payload: new Error(e).message
        // })
    }
}
