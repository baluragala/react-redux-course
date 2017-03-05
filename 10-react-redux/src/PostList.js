import React, {Component} from 'react';
import PostPreview from './PostPreview';
import posts from './posts';

class PostList extends Component {

  componentWillMount(){
    this.setState({posts});

  }

  render() {
    const postPreviewItems = this.state.posts && this.state.posts.map(post => <PostPreview key={post.id} post={post}/>);

    return (
      <div>
        {postPreviewItems}
      </div>
    );
  }
}

export default PostList;
