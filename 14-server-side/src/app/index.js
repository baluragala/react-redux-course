import React, {Component, PropTypes} from 'react';

export default class App extends Component {
  render() {
    const {today} = this.props;

    return (
      <div>
        <h1>Welcome to React On Server Side</h1>
        <p>Today is : {today}</p>
      </div>
    );
  }
}

App.propTypes = {
  today: PropTypes.string.isRequired
};
