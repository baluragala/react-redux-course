import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// react is a single application - one index.html or what ever html
// find a place to feed react components
// DOM helper from react
// load my App component into html dom
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
