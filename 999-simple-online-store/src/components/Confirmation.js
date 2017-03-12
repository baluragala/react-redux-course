/**
 * Created by moksha on 12/03/17.
 */
import React from 'react';

class Confirmation extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      fullName: React.PropTypes.string.isRequired,
      contactNumber: React.PropTypes.string.isRequired,
      shippingAddress: React.PropTypes.string.isRequired,
      selectedProducts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    }).isRequired
  };


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.props.data);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading"><h3>Confirm your order and shipping details</h3></div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div>
                <strong>Full Name</strong> : { this.props.data.fullName }
              </div>
              <br/>
              <div>
                <strong>Contact Number</strong> : { this.props.data.contactNumber }
              </div>
              <br/>
              <div>
                <strong>Shipping Address</strong> : { this.props.data.shippingAddress }
              </div>
              <br/>
              <div>
                <strong>Selected Products</strong> : { this.props.data.selectedProducts.join(", ") }
              </div>
              <br/>
              <button className="btn btn-success">
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;