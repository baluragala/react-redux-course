import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
  users: UserReducer,
  posts: PostReducer
});


export default rootReducer;