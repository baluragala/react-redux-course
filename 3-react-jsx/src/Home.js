/*
 Code is written in ES6 or ES2015
 */
//Import required libraries
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// create App component by extending the features of react component
class Home extends Component {
  //I am all - react is all about UI -
  render() {
    return (
      /* I am JSX (this is comment ) */

      /*
       className is attribute, used to apply css classes you cannot use class html attribute here
       due to the fact that you are writing code in JS and class in reserved word in JSX. Values
       provided for className attribute will be mapped to class attribute in original DOM
       */

      <div className="App">
        {/* line 23 - 31 are children to div element at line 22 */}
        <div className="App-header">
          {/* {} - represents expressions */}
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>React Native</li>
        </ul>
      </div>
    );
  }
}

// make me available for external world
export default Home;
