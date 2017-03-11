/**
 * Created by moksha on 11/03/17.
 */

import React from 'react';
import {Grid, Row, Col, FormGroup, InputGroup, ListGroup, FormControl, Button, ListGroupItem} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';
import FontAwesome from './FontAwesome'
import {browserHistory} from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  componentWillMount() {
    this.setState({results: [], numResults: 0, showQuickSearch: false});

  }

  handleSearch() {

  }

  handleSearchButton() {
    browserHistory.push(`/search?q=${findDOMNode(this.refs.searchInput).value}`);
  }

  performSearch() {
    console.log(findDOMNode(this.refs.searchInput).value);
  }


  handleClick(targetIndex) {
    if (this.state.numResults >= targetIndex) {
      window.open(this.state.results[targetIndex].link, "_blank");
    }
  }

  renderQuickSearch() {

    return this.state.results.map((result, idx) => {
      if (idx < 5) {
        return (<ListGroupItem key={"f" + idx}
                               onClick={this.handleClick.bind(null, idx)}
                               header={result.title}>{result.desc}
          <br/>
          <a bsStyle="link" style={{padding: 0}}
             href={result.link} target="_blank">{result.link}
          </a>
        </ListGroupItem>)
      }
    })
  }

  renderImages() {
    const searchIcon = <FontAwesome style={{fontSize: 20}} icon="search"/>;
    const imgSet = [
      {
        media: "only screen and (min-width: 601px)",
        src: " http://websearchapp.herokuapp.com/large.png"
      },
      {
        media: "only screen and (max-width: 600px)",
        src: "http://websearchapp.herokuapp.com/small.png"
      }
    ];
    const defaultImage = {
      src: "http://websearchapp.herokuapp.com/default.png",
      alt: "SearchTheWeb logo"
    };
    return {
      searchIcon: searchIcon,
      logoSet: imgSet,
      defaultImage: defaultImage
    }
  }

  render() {
    return (<Grid>
      <Row>
        <Col xs={ 12 } style={{textAlign: "center"}}>
          <img src="search.png" style={{width: "300px", height: "150px"}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <form>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  { this.renderImages().searchIcon }
                </InputGroup.Addon>
                <FormControl onChange={this.performSearch}
                             ref="searchInput"
                             type="text"/>
                <InputGroup.Button>
                  <Button onClick={ this.handleSearchButton }>
                    Search
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
          <ListGroup style={{
            display: this.state.showQuickSearch ?
              'block' : 'none'
          }}
                     className="quicksearch">
            {this.renderQuickSearch()}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {this.props.children}
        </Col>
      </Row>

    </Grid>);
  }

}

export default Search;