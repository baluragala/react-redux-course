import {takeLatest} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import axios from 'axios'
import {loadPosts, loadPostsFailed, loadPost, loadPostFailed} from './actionCreators/PostActionCreators'
import {POST_GET, POST_GET_BY_ID} from './actionTypes/PostActionTypes'

export function* getPosts() {
  try {
    //github public api url to fecth repository details for given user
    const url = `http://localhost:4000/posts`;
    // call - redux-saga effect used to call functions
    const result = yield call(() => axios.get(url));
    const posts = result.data;
    // put - redux-saga effect used to dispatch (put) action
    yield put(loadPosts(posts))
  } catch (error) {
    yield put(loadPostsFailed(error));
  }
}

export function* getPostById(action) {
  try {
    //github public api url to fecth repository details for given user
    const url = `http://localhost:4000/posts/${action.id}`;
    // call - redux-saga effect used to call functions
    const result = yield call(() => axios.get(url));
    const post = result.data;
    // put - redux-saga effect used to dispatch (put) action
    yield put(loadPost(post))
  } catch (error) {
    yield put(loadPostFailed(error));
  }
}

// watcher, which watches for configured action type, i.e., GET_REPOS  on the
export function* postsWatcher() {
  yield [takeLatest(POST_GET, getPosts), takeLatest(POST_GET_BY_ID, getPostById)];
}
