/**
 * Created by moksha on 11/03/17.
 */

import React from 'react';
import {ListGroupItem, Button, ListGroup} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.hideResults = this.hideResults.bind(this);
    this.showResults = this.showResults.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  componentWillMount() {
    this.setState({
      results: [],
      resultsToShow: 10,
      numResults: 0,
      showResults: true
    });

    fetch(`http://localhost:4000/sites?title_like=${this.props.location.query.q}`)
      .then(response => response.json())
      .then(results => this.setState({results}));
  }

  componentWillReceiveProps() {
    fetch(`http://localhost:4000/sites?title_like=${this.props.location.query.q}`)
      .then(response => response.json())
      .then(results => this.setState({results}));
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  hideResults() {
    this.setState({showResults: false});
  }

  showResults() {
    this.setState({showResults: true});
  }

  getSearchResults(res) {
    let resultsToShow = this.state.resultsToShow;
    if (res.length < resultsToShow) {
      resultsToShow = res.length;
    }
    this.setState({
      results: res, numResults: res.length,
      resultsToShow: resultsToShow
    });
  }

  renderSearch() {
    console.log("state", this.state);
    return this.state.results.map((result, idx) => {
      if (idx < this.state.resultsToShow) {
        return <ListGroupItem key={"f" + idx}
                              header={result.title}>{result.desc}<br/>
          <Button bsStyle="link" style={{padding: 0}}>
            <a href={result.link}
               target="_blank">{result.link}</a>
          </Button>
        </ListGroupItem>
      }
    })
  }


  render() {
    let c = this.renderSearch();
    console.log(c);
    return (this.state.showResults) ? (
        <div>
          <div style={{textAlign: "center"}}>
            Showing {this.state.resultsToShow} out of {this.state.numResults} hits
          </div>
          <ListGroup className="fullsearch">
            {this.renderSearch()}
          </ListGroup>
        </div>
      ) : null;
  }
}

export default Results;