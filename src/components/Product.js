import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * @description This will render the content
 * inside add to cart button
 * contained within figure element
 * based on boolean value
 *
 * @return jsx elements
 */
const btnContent = inCart =>
  inCart ? (
    <p className="text-capitalize mb-0" disabled>
      in cart
    </p>
  ) : (
    <i className="fas fa-cart-plus" />
  );

/**
 * @description Product component
 * @param {*} properties
 * @return jsx elements
 */
const Product = ({ product: { title, img, price, inCart } }) => {
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <figure className="card">
        <div
          className="img-container p-5"
          onClick={() => {
            console.log("You clicked me");
          }}
        >
          <Link to="/details">
            <img src={img} alt={title} className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart}
            onClick={() => console.log("added to the cart")}
          >
            {btnContent(inCart)}
          </button>
        </div>
        {/* Card footer */}
        <figcaption className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">{process.env.REACT_APP_CURRENCY}</span>
            {price}
          </h5>
        </figcaption>
      </figure>
    </ProductWrapper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container:hover .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    cursor: pointer;
    color: var(--mainBlue);
  }
`;

export default Product;
