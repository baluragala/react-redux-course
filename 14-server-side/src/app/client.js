import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

const initalState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
ReactDOM.render(<App {...initalState} />, document.getElementById('root'));
