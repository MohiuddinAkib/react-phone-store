import React, { Component, createContext } from "react";
import { storeProducts as products, detailProduct } from "./data";

const ProductContext = createContext();

class Productprovider extends Component {
  state = {
    products,
    detailProduct
  };

  handleDetail = () => console.log("Hello detail");

  addToCart = () => console.log("Hello from add to cart");

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { Productprovider, ProductConsumer };
