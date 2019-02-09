import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <figure>
      <figcaption>{product.title}</figcaption>
    </figure>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
