/**
 * Created by baluteju on 2/26/2017.
 */
import React  from 'react';

/**
 * Stateful class component
 * For SPA we would need to send form data async to server, so we would need
 * some JS function to handle form submission.
 * handleSubmit an JS function which is part of component
 *
 */

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.dir(event);
    console.log(this._color);
    alert('A name was submitted: ' + this._color.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Color:
          <input type="text" value="Green" ref={ input => this._color=input}/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Form3;
