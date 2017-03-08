import * as types from '../actions/PostActionTypes'
import * as actions from '../actionCreators/PostActionCreators';

describe('post actions', () => {
  it('should create an action to add a post', () => {
    const post = {title: "Async programming in JS"};
    const expectedAction = {
      type: types.POST_ADD,
      post
    };
    expect(actions.addPost(post)).toEqual(expectedAction)
  });

  it('should create an action to update a post', () => {
    const post = {title: "Async programming in JS - updated"};
    const expectedAction = {
      type: types.POST_UPDATE,
      post
    };
    expect(actions.updatePost(post)).toEqual(expectedAction)
  })

});