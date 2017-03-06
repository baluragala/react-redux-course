import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {getReposWatcher} from './sagas'
import {composeWithDevTools} from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();
//const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger()));
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, logger()),
  // other store enhancers if any
));

sagaMiddleware.run(getReposWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



