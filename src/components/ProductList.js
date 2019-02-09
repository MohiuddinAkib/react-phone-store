import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  eachProduct = products =>
    products.map(product => (
      <div className="col-md-4" key={product.id}>
        <Product product={product} />
      </div>
    ));

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => this.eachProduct(value.products)}
            </ProductConsumer>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductList;
