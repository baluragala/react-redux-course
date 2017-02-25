/**
 * Created by moksha on 26/01/17.
 */

import React from 'react';
import './ArticleCard.css';


class ArticleItem extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor')
    }

    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render');

        let {title, content} = this.props; // ES6 destructuring
        return (
            <div className="cardContainer">
                <label className="title">{title}</label>
                <p>{content}</p>
            </div>
        )
    }
}

export default ArticleItem;