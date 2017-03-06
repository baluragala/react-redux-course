import reducer from './PostReducer';
import * as types from '../actions/PostActionTypes';

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        posts: []
      }
    )
  });

  it('should return single post', () => {
    let result = reducer({}, {type: types.POST_GET});
    expect(result).toEqual({posts: [{title: 'Ayscn in JS'}]});
    expect(result.posts.length).toEqual(1);
  })

});
