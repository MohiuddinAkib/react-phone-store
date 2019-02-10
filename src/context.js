import React, { PureComponent, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

// Locally stored cart
const cart = JSON.parse(localStorage.getItem("cart"));

class Productprovider extends PureComponent {
  state = {
    products: [],
    detailProduct,
    cart: []
  };

  componentDidMount = () => {
    this.setProducts();
  };

  /**
   * @description   Fetches products data and updates the state
   *                with those data
   *
   * @return        void
   */
  setProducts = () => {
    let products = this.deepCopiedProducts(storeProducts);

    // Update the state to change the products
    this.setState(
      () => ({ products }),
      () => this.setCartAndProductsAfterPageRefresh()
    );
  };

  /**
   * @description     This function checks if user refreshed the page
   *                  while adding item ins cart. If yes then get those cart item
   *                  from localstorage
   *                  to context state to let the child component know
   *                  about the items in cart
   *
   * @return void
   */
  setCartAndProductsAfterPageRefresh = () => {
    // Set the cart after page refresh
    if (cart !== null) {
      // If local cart is not null update the context state cart
      this.setState(
        () => ({ cart }),
        () => this.checkProductOfProductsInCartAfterPageRefresh()
      );
    }
  };

  /**
   * @description   This function checks which product of the products context state
   *                exists in the cart after refreshing the page
   *
   * @return        void
   */
  checkProductOfProductsInCartAfterPageRefresh = () => {
    // Deep copy the state products
    let tempProducts = this.deepCopiedProducts(this.state.products);
    // Look for the items in the cart
    cart.forEach(item => {
      const index = tempProducts.findIndex(product => product.id === item.id);
      tempProducts[index].inCart = true;
    });
    // Now update the state products in this component
    this.setState(() => ({ products: tempProducts }));
  };

  /**
   * @description   Deeply copy the products state
   *
   * @param         array (list of products)
   * @return        copied state products
   */
  deepCopiedProducts = productsArray => {
    // Deep copy the state products
    let tempProducts = [];
    // Deep copying the state
    productsArray.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    // Return the copy of state products
    return tempProducts;
  };

  /**
   * @description   Gets a single product by id and returns copy of it
   *
   * @return        product
   */
  getItem = id => ({
    ...this.state.products.find(product => product.id === id)
  });

  /**
   * @description   Gets a single product by id and updates the state
   *
   * @param         id
   * @return        void
   */
  handleDetail = id =>
    this.setState(() => ({ detailProduct: this.getItem(id) }));

  /**
   * @description   Adds an item to the cart
   *
   * @return        void
   */
  addToCart = id => {
    const { tempProducts, product } = this.updateTheProductById(id);
    // update the state
    this.setState(
      prevState => ({
        products: tempProducts,
        cart: [...prevState.cart, product]
      }),
      () => localStorage.setItem("cart", JSON.stringify(this.state.cart))
    );
  };

  /**
   * @description   Get a copy of products context state
   *                from that list get a product based on the id and then
   *                change the inCart property value as it was added to the cart
   *
   * @param         id
   * @return        copied products and the product
   */
  updateTheProductById = id => {
    // Deep copy the state products
    let tempProducts = this.deepCopiedProducts(this.state.products);
    // Get the product index
    const index = tempProducts.findIndex(product => product.id === id);
    // Get the product
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const { price } = product;
    product.total = price;
    return { tempProducts, product };
  };

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
