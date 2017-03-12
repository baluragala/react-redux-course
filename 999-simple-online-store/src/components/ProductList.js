import React from 'react'

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelectedBooks = this.handleSelectedBooks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      books: [
        {id: 1, name: 'Samsung Galaxy Edge 6', manufacturer: 'Samsung'},
        {id: 2, name: 'IPhone 7', manufacturer: 'Apple'},
        {id: 3, name: 'Lenovo K3 Note', manufacturer: 'Lenovo'},
        {id: 4, name: 'Oppo Selfie Exper', manufacturer: 'Oppo'},
      ],
      selectedProducts: [],
      error: false
    })
  }

  _renderBook(product) {
    return (
      <div className="checkbox" key={product.id}>
        <label>
          <input type="checkbox" value={product.name}
                 onChange={this.handleSelectedBooks}/>
          {product.name} -- {product.manufacturer}
        </label>
      </div>
    );
  }


  _renderError() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      );
    }
  }


  handleSelectedBooks(event) {
    var selectedBooks = this.state.selectedProducts;
    var index = selectedBooks.indexOf(event.target.value);

    if (event.target.checked) {
      if (index === -1)
        selectedBooks.push(event.target.value);
    } else {
      selectedBooks.splice(index, 1);
    }

    this.setState({selectedProducts: selectedBooks});
  }


  handleSubmit(event) {
    event.preventDefault();

    if (this.state.selectedProducts.length === 0) {
      this.setState({error: 'Please choose at least one product to continue'});
    } else {
      this.setState({error: false});
      this.props.updateFormData({selectedProducts: this.state.selectedProducts});
    }
  }


  render() {
    var errorMessage = this._renderError();
    console.log(this.state);
    return (
      <div>
        <h3> Available Products </h3>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          { this.state.books.map((book) => {
            return (this._renderBook(book));
          })}
          <input type="submit" className="btn btn-success"/>
        </form>
      </div>
    );
  }
}

export default ProductList;