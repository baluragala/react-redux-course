/**
 * Created by moksha on 12/03/17.
 */
import React from 'react';
import {findDOMNode} from 'react-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.performSearch = this.performSearch.bind(this);
    this.openLibrarySearch = this.openLibrarySearch.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.setState({docs: [], numFound: 0, num_found: 0, start: 0, searchCompleted: false, searching: false});
  }

  render() {
    return (
      <div className='container'>
        <div className="row" style={{"padding": "20px"}}>
          <div className="col-lg-8 col-lg-offset-2">
            <div className='text-center'><img src="logo.png" role="presentation"/></div>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search here..." ref='searchInput'/>
              <span className="input-group-btn">
              <button className="btn btn-default" type="button" style={{backgroundColor: "dodgerblue"}}
                      onClick={this.performSearch}>Go!</button>
            </span>
            </div>
          </div>
        </div>
        { (() => {
          if (this.state.searching) {
            return this.renderSearching();
          }
          return this.state.searchCompleted ? this.renderSearchElements() : <div/>
        })()}
      </div>
    );
  }

  renderSearching() {
    return <div className="row">
      <div className="col-lg-8 col-lg-offset-2">
        <div className='text-center'><img src="loader.gif" width="100px" height="100px" role="presentation"/></div>
      </div>
    </div>;
  }

  renderSearchElements() {
    return (

      <div className="row" style={{"padding": "20px"}}>
        <div className="col-lg-8 col-lg-offset-2">
          <span className='text-center'>Total Results: {this.state.numFound}</span>
          <table className="table table-stripped">
            <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Subtitle</th>
              <th>Edition</th>
            </tr>
            </thead>
            <tbody>
            {this.renderDocs(this.state.docs)}
            </tbody>
          </table>
        </div>
      </div>

    );
  }

  renderDocs(docs) {
    return docs.map((doc) => {
      //console.log(doc);
      return <tr key={doc.key}>
        <td>{doc.title}</td>
        <td>{(doc.author_name || []).join(', ')}</td>
        <td>{doc.subtitle}</td>
        <td>{doc.edition_count}</td>
      </tr>
    })
  }


  performSearch() {
    let searchTerm = findDOMNode(this.refs.searchInput).value;
    this.openLibrarySearch(searchTerm);
    this.setState({searchCompleted: false, searching: true});
  }

  updateState(json) {
    this.setState({
      ...json,
      searchCompleted: true,
      searching: false
    });
  }

  openLibrarySearch(searchTerm) {
    let openlibraryURI = `https://openlibrary.org/search.json?page=1&q=${searchTerm}}`;
    fetch(openlibraryURI)
      .then(res => res.json())
      .then(this.updateState)
      .catch(function (ex) {
        console.log('Parsing failed', ex)
      })

  }
}

export default Search;