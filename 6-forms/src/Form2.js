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

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Color: {/* remove the binding for value prop and notice what happens :-D */}
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Pick your favorite color:
          {/* In React, instead of using this selected attribute,
          use a value attribute on the root select tag */}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=""></option>
            <option value="Orange">Orange</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Mangento">Mangento</option>
          </select>
        </label>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Form2;