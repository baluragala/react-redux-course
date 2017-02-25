/**
 * Created by baluteju on 2/25/2017.
 */


/*
 Code is written in ES6 or ES2015
 */
//Import required libraries
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// create App component by extending the features of react component
class HomeNonJSX extends Component {
    //I am all - react is all about UI -
    render() {

        /* I am JSX (this is comment ) */

        /*
         className is attribute, used to apply css classes you cannot use class html attribute here
         due to the fact that you are writing code in JS and class in reserved word in JSX. Values
         provided for className attribute will be mapped to class attribute in original DOM
         */

        return React.createElement(
            "div",
            {className: "App"},
            React.createElement(
                "div",
                {className: "App-header"},
                React.createElement("img", {src: logo, className: "App-logo", alt: "logo"}),
                React.createElement(
                    "h2",
                    null,
                    "Welcome to React"
                )
            ),
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    "React"
                ),
                React.createElement(
                    "li",
                    null,
                    "Angular"
                ),
                React.createElement(
                    "li",
                    null,
                    "React Native"
                )
            )
        );

    }
}

// make me available for external world
export default HomeNonJSX;


/*

 */