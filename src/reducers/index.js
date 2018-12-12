import { combineReducers } from 'redux';
import { feedsReducer } from './feeds';
import { searchReducer } from './search';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
	news: feedsReducer,
	auth: authReducer,
	search: searchReducer
})
