import React, {Component} from 'react';


class PostMeta extends Component {

  render() {
    const {author,createdAt} = this.props;
    return (
      <div>
        <div className="post-meta">
          <a>
            <img src={author.image} role="presentation"/>
          </a>
          <div className="info">
            <a className="author">{author.username}</a>
            <span className="date">{createdAt}</span>
          </div>
          {/*<favorite-button className="pull-xs-right">
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"/>0
            </button>
          </favorite-button>*/}
        </div>
      </div>
    )
  }
}

export default PostMeta;


/*
 <div class="article-meta">
 <a ng-reflect-router-link="/profile,lloyd" ng-reflect-href="#/profile/lloyd" href="#/profile/lloyd">
 <img ng-reflect-src="https://pbs.twimg.com/profile_images/722819453939888130/osWwzkFY_bigger.jpg" src="https://pbs.twimg.com/profile_images/722819453939888130/osWwzkFY_bigger.jpg">
 </a>

 <div class="info">
 <a class="author" ng-reflect-router-link="/profile,lloyd" ng-reflect-href="#/profile/lloyd" href="#/profile/lloyd">
 lloyd
 </a>
 <span class="date">
 March 4, 2017
 </span>
 </div>


 <favorite-button class="pull-xs-right" ng-reflect-article="[object Object]"><button class="btn btn-sm btn-outline-primary" ng-reflect-klass="btn btn-sm" ng-reflect-ng-class="[object Object]">
 <i class="ion-heart"></i>
 0

 </button>
 </favorite-button>

 </div>*/
