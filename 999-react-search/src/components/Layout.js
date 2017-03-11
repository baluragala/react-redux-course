/**
 * Created by moksha on 11/03/17.
 */

import React from 'react';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return <div>
      {this.props.children}
      <Footer />
    </div>;
  }
}

export default Layout;