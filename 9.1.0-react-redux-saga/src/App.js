import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import {changeUsername,getRepos} from  './actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <br></br>
          <input type="text"
            value={this.props.username}
            onChange={this.props.changeUsername}
          />
          <button onClick={this.props.onGetRepos}>Get Repos</button>
        </div>
        <ul>
        {this.props.repos ? this.props.repos.map((repo)=><li key={repo.name}>{repo.name}</li>) : "REPOS COME HERE"}
        </ul>
      </div>
    );
  }
}

//function mapStateToProps(state){
/*  return {
    username : state.username,
    repos : state.repos,
    followers: state.followers,
    isFetching: state.isFetching
  }
}

function mapActionsToProps(dispatch){
  return{
  changeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onGetRepos: (evt) => dispatch(getRepos())
}
}*/

export default connect((state)=>{
  return {
    username : state.username,
    repos : state.repos,
    followers: state.followers,
    isFetching: state.isFetching
  }
},(dispatch)=> {
  return{
  changeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onGetRepos: (evt) => dispatch(getRepos())
}})(App)
