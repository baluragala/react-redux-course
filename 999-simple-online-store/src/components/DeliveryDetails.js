/**
 * Created by moksha on 12/03/17.
 */
import React from 'react';

class DeliveryDetails extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState(
      {deliveryOption: 'Primary'}
    );
  }

  handleChange(event) {
    this.setState({deliveryOption: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.state);
  }

  render() {
    return (
      <div>
        <h1>How fast you need product(s) to be delivered.</h1>
        <div style={{width: 200}}>
          <form onSubmit={this.handleSubmit}>
            <div className="radio">
              <label>
                <input type="radio"
                       checked={this.state.deliveryOption === "Express"}
                       value="Express"
                       onChange={this.handleChange}/>
                Express -- Today Delivery
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio"
                       checked={this.state.deliveryOption === "Normal"}
                       value="Normal"
                       onChange={this.handleChange}/>
                Normal -- 3-4 working days
              </label>
            </div>

            <button className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

}

export default DeliveryDetails;