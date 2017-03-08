/*
 Code is written in ES6 or ES2015
 */
//Import required libraries
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// create App component by extending the features of react component
class App extends Component {
  //I am all - react is all about UI -
  render() {
    return (
        /* I am JSX */
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// make me available for external world
export default App;
