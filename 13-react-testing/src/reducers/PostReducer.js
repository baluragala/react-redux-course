import * as PostActions from '../actions/PostActionTypes';


const initialState = {posts: []};

export default (prevState = initialState, action) => {
  switch (action.type) {

    case PostActions.POST_GET:
      return Object.assign({}, prevState, {posts: [{title: 'Ayscn in JS'}]});

    default:
      return prevState;
  }
}