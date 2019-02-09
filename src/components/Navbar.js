import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand" />
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <button>
              <i className="fas fa-cart-plus" />
              My Cart
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
