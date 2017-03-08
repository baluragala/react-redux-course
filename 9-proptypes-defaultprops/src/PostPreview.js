import React, {Component} from 'react';
import {Link} from 'react-router';
import './PostItem.css';

import PostMeta from './PostMeta';

class PostPreview extends Component {

  static propTypes = {
    post : React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.object.isRequired,
    }).isRequired
  }

  static defaultProps = {
    post : {
      id:0,
      title:'Title comes here',
      author:{}
    }
  };


  render() {
    const {post} = this.props;
    console.log(React.PropTypes);
    return (
      <div className="panel panel-default already-visible come-in">
        <div className="panel-heading"><Link to={"posts/" + post.id }>{post.title}</Link></div>
        <div className="panel-body">
          <PostMeta author={post.author} createdAt={post.createdAt}/>
          <p style={{margin: '5px'}}>{post.description}</p>
        </div>
      </div>
    );
  }
}

export default PostPreview;
