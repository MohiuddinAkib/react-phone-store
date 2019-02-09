import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

class Productprovider extends Component {
  state = {
    products: [],
    detailProduct
  };

  componentDidMount = () => {
    this.setProducts();
  };

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => ({ products }));
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
