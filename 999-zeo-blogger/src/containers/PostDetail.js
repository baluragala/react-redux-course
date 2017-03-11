import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PostActions from '../actionCreators/PostActionCreators';

class PostDetail extends Component {

  componentWillMount() {
    const {id} = this.props.params;
    console.log(id);
    this.props.actions.getPostById(id);
  }

  render() {
    let {post} = this.props;
    post = post ? post : {}
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

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
