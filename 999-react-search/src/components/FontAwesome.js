import React from 'react';

class FontAwesome extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string
  }

  static defaultProps() {
    return {
      icon: ""
    }
  }

  render() {
    if (this.props.icon) {
      return (<i className={ "fa fa-" + this.props.icon }/>);
    } else {
      return null;
    }
  }
}

export default FontAwesome;
