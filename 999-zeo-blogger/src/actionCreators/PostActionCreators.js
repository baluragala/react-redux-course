import * as PostActions from '../actionTypes/PostActionTypes';

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

export const loadPosts = (posts) => {
  return {
    'type': PostActions.POST_GET_SUCCESS,
    posts: posts
  }
};

export const loadPostsFailed = (error) => {
  return {
    'type': PostActions.POST_GET_ERROR,
    error: error
  }
};

export const getPostById = (id) => {
  return {
    'type': PostActions.POST_GET_BY_ID,
    id: id
  }
};

export const loadPost = (post) => {
  return {
    'type': PostActions.POST_GET_BY_ID_SUCCESS,
    post: post
  }
};

export const loadPostFailed = (error) => {
  return {
    'type': PostActions.POST_GET_BY_ID_ERROR,
    error: error
  }
};