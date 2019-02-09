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

  /**
   * @description Fetches products data and updates the state
   * with those data
   *
   * @return void
   */
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => ({ products }));
  };

  /**
   * @description Gets a single product by id and returns it
   *
   * @return product
   */
  getItem = id => this.state.products.find(product => product.id === id);

  /**
   * @description Gets a single product by id and updates the state
   *
   * @param id
   * @return void
   */
  handleDetail = id =>
    this.setState(() => ({ detailProduct: this.getItem(id) }));

  /**
   * @description Adds an item to the carts
   *
   * @return void
   */
  addToCart = id => console.log(`Hello from add to cart ${id}`);

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
