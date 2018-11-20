import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { userReducer } from './user';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
	news: newsReducer,
	user: userReducer,
	auth: authReducer
})