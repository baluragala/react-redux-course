import React from 'react';
import {
  Router, Route
}
  from 'react-router';
import {render} from 'react-dom'
import Search from './components/Search';
import Results from './components/Results';
import Layout from './components/Layout';
import './index.css';
//import SearchActions from './actions/search.js';

import { browserHistory } from 'react-router'

render((
  <Router history={ browserHistory }>
    <Route component={Layout}>
      <Route path="/" component={Search}>
        <Route path="search" component={Results}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));