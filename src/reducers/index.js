import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});

// Processed information from reducers becomes centralized here and provider function gives parent component access to this store. 