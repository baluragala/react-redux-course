import * as PostActions from '../actionTypes/PostActionTypes';
import {fromJS} from 'immutable';


const initialState = {posts: [], users: []};

export default (state = initialState, action) => {
  let prevState = fromJS(state);
  let newState = fromJS({});
  switch (action.type) {

    case PostActions.POST_GET:
    case PostActions.POST_GET_BY_ID:
      newState = prevState.merge({loading: true});
      return newState.toJS();

    case PostActions.POST_GET_SUCCESS:
      newState = prevState.merge({loading: false, posts: action.posts});
      return newState.toJS();

    case PostActions.POST_GET_ERROR:
    case PostActions.POST_GET_BY_ID_ERROR:
      newState = prevState.merge({loading: false, error: action.error});
      return newState.toJS();

    case PostActions.POST_GET_BY_ID_SUCCESS:
      newState = prevState.merge({loading: false, post: action.post});
      return newState.toJS();

    default:
      return prevState;
  }
}