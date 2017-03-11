import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../actionCreators/UserActionCreators'
import {browserHistory} from 'react-router'

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.userSignedUp) {
      browserHistory.push('/login');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.signUp(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input type="password" className="form-control" id="pwd" onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}


function mapStateToProps(state) {
  return {
    userSignedUp: state.users.userSignedUp
  }
}

function mapDispatchToProps(disptach) {
  return {
    actions: bindActionCreators(UserActions, disptach)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
