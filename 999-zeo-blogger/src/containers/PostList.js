import React, {Component} from 'react';
import PostPreview from '../components/posts/PostPreview';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PostActions from '../actionCreators/PostActionCreators';


class PostList extends Component {

  componentWillMount() {
    this.props.actions.getPosts();
  }

  render() {
    const postPreviewItems = this.props.posts && this.props.posts.map(post => <PostPreview key={post.id} post={post}/>);

    return (
      <div>
        {postPreviewItems}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
