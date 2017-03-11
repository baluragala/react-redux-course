/**
 * Created by moksha on 12/03/17.
 */

import React from 'react';
import ProductList from './ProductList'
import ShippingDetails from './ShippingDetails'
import DeliveryDetails from './DeliveryDetails'
import Confirmation from './Confirmation'
import Success from './Success'


class OnlineStore extends React.Component {

  constructor(props) {
    super(props);
    this.updateFormData = this.updateFormData.bind(this);
  }

  componentWillMount() {
    this.setState({currentStep: 1, formValues: {}});
  }

  updateFormData(formData) {
    var formValues = Object.assign({}, this.state.formValues, formData);
    var nextStep = this.state.currentStep + 1;
    console.log(formValues);
    this.setState({currentStep: nextStep, formValues: formValues});
  }

  render() {
    switch (this.state.currentStep) {
      case 1:
        return <ProductList updateFormData={this.updateFormData}/>;
      case 2:
        return <ShippingDetails updateFormData={this.updateFormData}/>;
      case 3:
        return <DeliveryDetails updateFormData={this.updateFormData}/>;
      case 4:
        return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData}/>;
      case 5:
        return <Success data={this.state.formValues}/>;
      default:
        return <ProductList updateFormData={this.updateFormData}/>;
    }
  }

}

export default OnlineStore;