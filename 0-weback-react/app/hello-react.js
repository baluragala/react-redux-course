import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// react is a single application - one webpack.html or what ever html
// find a place to feed react components
// DOM helper from react
// load my App component into html dom
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
