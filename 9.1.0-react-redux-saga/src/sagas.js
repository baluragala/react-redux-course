import {takeLatest, takeEvery} from 'redux-saga'
import {select, call, put} from 'redux-saga/effects'
import axios from 'axios'
import {loadRepos} from './actions'

export function* getRepos() {
  // select - redux-saga effect which has access to state. Used to select data from state
  const username = yield select((state) => state.username);

  //github public api url to fecth repository details for given user
  const url = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // call - redux-saga effect used to call functions
  const repos = yield call(() => axios.get(url));

  // put - redux-saga effect used to dispatch (put) action
  yield put(loadRepos(username, repos))
}


// watcher, which watches for configured action type, i.e., GET_REPOS  on the
export function* getReposWatcher() {
  //yield [takeLatest('GET_REPOS', getRepos), takeEvery('GET_REPOS', getRepos),takeEvery('GET_REPOS', getRepos),takeEvery('GET_REPOS', getRepos),takeEvery('GET_REPOS', getRepos)]
  yield takeLatest('GET_REPOS', getRepos);
}
//