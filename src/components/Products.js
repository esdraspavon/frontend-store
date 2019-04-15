import React, { Component } from "react";
import Product from "./Product";
import "./css/Products.css";
class Products extends Component {
  render() {
    return (
      <div className="productos">
        <h2>Nuestros productos</h2>
        <ul className="lista-productos">
          {Object.keys(this.props.products).map(product => (
            <Product key={product} data={this.props.products[product]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
