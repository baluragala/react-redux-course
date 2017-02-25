/**
 * Created by moksha on 26/01/17.
 */
import React, {Component} from 'react';
import Card from './Card';

/**
 * Class based stateful component
 */
class News extends Component {
  constructor(props) {
    super(props);
  }

  /*life cycle method*/
  componentWillMount() {
    const news = [
      {title: 'React uses virtual DOM', content: 'Virtual DOM makes pages rendering super speed'},
      {title: 'React is all about UI', content: 'React is view library from Facebook'},
      {
        title: 'React components can be stateful or stateless',
        content: 'Stateful components maintain state where a stateless components do not maintain state'
      }
    ];

    this.setState({news});
  }

  /*render() {
   return (
   <Card title='React uses virtual DOM' content='Virtual DOM makes pages rendering super speed'/>
   );
   }*/

  render() {
    return (
      /* NOT JSX COMMENTS - PURE JS COMMENTS
       style is a object which contains css but written JS so some rules to note. CSS uses hypen (-) as separator
       which is simulated by camelCase. Also note usage of Object in JSX hence double curly
       */
      <div style={{display: 'flex'}}>
        { /* look at the turthy */
          this.state.news && this.state.news.map((n) => <Card title={n.title} content={n.content}/>)
        }
      </div>
    )
  }

}
export default News;