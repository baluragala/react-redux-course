import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {Router, browserHistory} from 'react-router';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import createRoutes from './routes';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {postsWatcher} from './sagas'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

const routes = createRoutes();

sagaMiddleware.run(postsWatcher);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
