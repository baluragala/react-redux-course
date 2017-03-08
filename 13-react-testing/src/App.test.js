import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

  it('should render an div with class name `.App`', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper.debug());
    expect(wrapper.find('div')).toHaveLength(2);
  });

});