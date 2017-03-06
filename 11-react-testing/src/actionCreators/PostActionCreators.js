import * as PostActions from '../actions/PostActionTypes';

export const addPost = (post) => {
  return {
    'type': PostActions.POST_ADD,
    post: post
  }
};

export const updatePost = (post) => {
  return {
    'type': PostActions.POST_UPDATE,
    post: post
  }
};

export const deletePost = (postId) => {
  return {
    'type': PostActions.POST_DELETE,
    postId: postId
  }
};

export const getPosts = () => {
  return {
    'type': PostActions.POST_GET
  }
};
