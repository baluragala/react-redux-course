import React, {Component} from 'react';
import {Link} from 'react-router';
import './PostItem.css';

import PostMeta from './PostMeta';

class PostPreview extends Component {

  render() {
    const {post} = this.props;
    console.log(post);
    return (
      <div className="panel panel-default already-visible come-in">
        <div className="panel-heading"><Link to={"/posts/" + post.id }>{post.title}</Link></div>
        <div className="panel-body">
          <PostMeta author={post.author} createdAt={post.createdAt}/>
          <p style={{margin: '5px'}}>{post.description}</p>
        </div>
      </div>
    );
  }
}

export default PostPreview;
