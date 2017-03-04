import React, {Component} from 'react';
import posts from './posts';

class PostDetail extends Component {
  componentWillMount() {
    const {id} = this.props.params;
    // eslint-disable-next-line
    const filteredPosts = posts.filter(post => post.id == id);
    this.setState({post: filteredPosts.pop()});
  }

  render() {
    const {id} = this.props.params;
    const {post} = this.state;
    return (
      <div>
        <div className="post-detail-header">
          <h1>{post.title}</h1>
        </div>
        <p className="post-detail-body">{post.body}</p>
      </div>
    );
  }
}

export default PostDetail;
