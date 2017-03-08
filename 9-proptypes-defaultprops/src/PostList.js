import React, {Component} from 'react';
import PostPreview from './PostPreview';
import posts from './posts';

class PostList extends Component {

  componentWillMount(){
    this.setState({posts});
    console.log(posts);
  }

  render() {
    const postPreviewItems = this.state.posts && this.state.posts.map(post => <PostPreview key={post.id} post={post}/>);
    console.log(this.state.posts);
    return (
      <div>
        {postPreviewItems}
      </div>
    );
  }
}

export default PostList;
