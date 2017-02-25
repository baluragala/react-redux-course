import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import HomeNonJSX from './HomeNonJSX';
import './index.css';

// react is a single application - one webpack.html or what ever html
// find a place to feed react components
// DOM helper from react
// load my App component into html dom


ReactDOM.render(
    <div>
        <Home />
        <HomeNonJSX/>
    </div>,
    document.getElementById('root')
);

