import React, {Component} from 'react';
import ArticleItem from './ArticleItem';

/**
 * Class based stateful component
 */
class ArticleList extends Component {
    /*constructor(props) {
     super(props);
     }*/

    /*life cycle method*/
    componentWillMount() {
        const articles = [
            {title: 'React uses virtual DOM', content: 'Virtual DOM makes pages rendering super speed'},
            /*{title: 'React is all about UI', content: 'React is view library from Facebook'},
             {
             title: 'React components can be stateful or stateless',
             content: 'Stateful components maintain state where a stateless components do not maintain state'
             }*/
        ];

        this.setState({articles});
    }

    addArticle() {
        let articles = this.state.articles;
        articles.push({
            title: 'React is all about UI',
            content: 'React is view library from Facebook'
        })
        this.setState({articles});
    }

    render() {
        return (
            /* NOT JSX COMMENTS - PURE JS COMMENTS
             style is a object which contains css but written JS so some rules to note. CSS uses hypen (-) as separator
             which is simulated by camelCase. Also note usage of Object in JSX hence double curly
             */
            <div style={{display: 'flex'}}>
                <button onClick={()=>this.addArticle()}>Add Article</button>
                { /* look at the turthy */
                    this.state.articles && this.state.articles.map((article) => <ArticleItem key={article.title}
                                                                                             title={article.title}
                                                                                             content={article.content}/>)
                }
            </div>
        )
    }

}
export default ArticleList;