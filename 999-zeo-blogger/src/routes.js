import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Home from './components/Home';
import PostList from './containers/PostList';
import PostDetail from './containers/PostDetail';

import Signup from './containers/Signup';
import Login from './components/users/Login';

const createRoutes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="posts" component={PostList}/>
      <Route path="posts/:id" component={PostDetail}/>
      <Route path="signup" component={Signup}/>
      <Route path="login" component={Login}/>
    </Route>
  );
};

export default createRoutes;