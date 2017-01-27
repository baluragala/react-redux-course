import React from 'react';
import ReactDOM from 'react-dom';
import News from './News';
import './index.css';


class MouseEnterCounter extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.setState({count: 0});
  }

  entered() {

  }

  render() {
    return <h1 style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      border: '1px dashed red',
      fontSize: '15em'
    }} onMouseEnter={() => this.setState({count: this.state.count + 1})}>
      {this.state.count}
    </h1>;
  }
}

ReactDOM.render(
  <MouseEnterCounter />,
  document.getElementById('root')
);


/*
 ReactDOM.render(
 <News />,
 document.getElementById('root')
 );*/
