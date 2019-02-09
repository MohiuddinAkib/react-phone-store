import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: storeProducts
    };
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <div className="col-md-4">
              <Product />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductList;
