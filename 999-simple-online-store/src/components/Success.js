/**
 * Created by moksha on 12/03/17.
 */
import React from 'react';

class Success extends React.Component {
  render() {
    var numberOfDays = "Today ";

    if (this.props.data.deliveryOption === 'Normal') {
      numberOfDays = "3 to 4 ";
    }
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading"><h2>
            Thank you for shopping with us {this.props.data.fullName}.
          </h2>
          </div>
          <div className="panel-body">

            <h4>
              You order {this.props.data.selectedProducts.join(", ")}
              at {this.props.data.shippingAddress} will delivered
              {numberOfDays === "Today " ? "Today" : " in " + numberOfDays + " days" }
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;