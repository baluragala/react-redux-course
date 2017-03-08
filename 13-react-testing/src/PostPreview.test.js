import React from 'react';
import {shallow} from 'enzyme';
import PostPreview from './PostPreview';
import PostMeta from './PostMeta'
import {Link} from 'react-router';
import renderer from 'react-test-renderer';

describe('<PostPreview />', () => {

  it('should render an PostMeta', () => {
    const wrapper = shallow(<PostPreview
      post={{id: 1, title: 'test', body: 'test', description: 'test', author: {image: '', bio: ''}}}/>);
    //console.log(wrapper.debug());
    expect(wrapper.find(PostMeta)).toBeDefined();
  });

  it('should render Link to PostDetail with id 1', () => {
    const wrapper = shallow(<PostPreview
      post={{id: 1, title: 'test', body: 'test', description: 'test', author: {image: '', bio: ''}}}/>);
    //console.log(wrapper.debug());
    let link = wrapper.find(Link);
    expect(link.prop('to')).toEqual('posts/1');
  });


  it('renders correctly', () => {
    const tree = renderer.create(
      <PostPreview
        post={{id: 1, title: 'test', body: 'test', description: 'test', author: {image: '', bio: ''}}}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});