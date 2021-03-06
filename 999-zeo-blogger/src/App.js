import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {IndexLink, Link} from 'react-router';

class App extends Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Zeo Blogger</a>
            </div>
            <ul className="nav navbar-nav">
              {/*<li className="active"><a href="#">Home</a></li>*/}
              {/*<li><a href="/about">About</a></li>*/}
              <li><IndexLink to="/" activeStyle={{color: 'white'}}>Home</IndexLink></li>
              <li><Link to="/posts" activeStyle={{color: 'white'}}>Posts</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </nav>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
