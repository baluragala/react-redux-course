import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import App from './App';
import Home from './Home';
import About from './About';
import PostList from './PostList';
import PostDetail from './PostDetail';

import Signup from './Signup';
import Login from './Login';

import './index.css';


const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store);
    /*if (store.getState().users.userSignedUp)
      browserHistory.push('/posts');*/
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="posts" component={PostList}/>
        <Route path="posts/:id" component={PostDetail}/>
        <Route path="about" component={About}/>
        <Route path="signup" component={Signup}/>
        <Route path="login" component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
