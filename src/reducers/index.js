import { combineReducers } from 'redux';
import { feedsReducer } from './feeds';
// import { userReducer } from './user';
// import { authReducer } from './auth';

export const rootReducer = combineReducers({
	feeds: feedsReducer
})