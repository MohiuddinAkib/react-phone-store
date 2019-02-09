import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <section>
        <h3>Hello from product list</h3>
        <Product />
      </section>
    );
  }
}

export default ProductList;
