import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';
import PostList from './PostList';
import PostDetail from './PostDetail';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="posts" component={PostList}/>
      <Route path="posts/:id" component={PostDetail}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
