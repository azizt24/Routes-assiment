import React, { Component } from 'react';
import productsData from './store';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: productsData });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    );
  }
}

export default Products;
