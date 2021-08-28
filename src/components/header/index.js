import React, { useState, useEffect } from "react";
import Logo from "../../images/logo_company.svg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import product01 from "../../images/products/01.jpg";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartCount(
          data.user.cart.reduce((acc, cur) => (acc += cur.quantity), 0),
          console.log("cartCount", cartCount)
        );
      });
  }, [cartCount]);

  return (
    <div>
      <Navbar color="white" expand="md" className="fixed-top">
        <div className="container">
          <NavbarBrand to="/">
            <img src={Logo} alt="company" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem className="w-submenu">
                <span className="nav-link">Categories</span>
                <ul className="submenu">
                  <li className="nav-item w-submenu">
                    <Link className="" to="/category">
                      category 1
                    </Link>
                  </li>
                  <li className="nav-item w-submenu">
                    <Link className="" to="/category">
                      category 2
                    </Link>
                  </li>
                </ul>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
            </Nav>
            <ul className="right-grid">
              <li>
                <Link className="right-link" to="/account">
                  <AiOutlineUser />
                </Link>
              </li>
              <li>
                <Link className="right-link" to="/favourite">
                  <AiOutlineHeart />
                  <span className="counter fav">0</span>
                </Link>
              </li>
              <li>
                <span className="right-link" onClick={handleToggleSidebar}>
                  <AiOutlineShoppingCart />
                  <span className="counter cart">{cartCount}</span>
                </span>
              </li>
            </ul>
          </Collapse>
        </div>
      </Navbar>
      <div
        className={isSidebarOpen ? "sideMenuProducts show" : "sideMenuProducts"}
      >
        <button type="button" className="close" onClick={handleToggleSidebar}>
          x
        </button>
        <p>No products in the cart.</p>
        <h3 className="mini-cart-header">Cart Items</h3>
        <div className="card single-product-wrapper">
          <div className="card-image">
            <img src={product01} alt="product name" />
          </div>
          <div className="card-body product-body">
            <h5 className="product-title">product name</h5>
            <span className="quantity">
              1 × <span className="Price-amount amount">$</span>42.00
            </span>
          </div>
          <div className="remove-product">x</div>
        </div>
        <Link className="btn btn-main" to="/cart">
          show cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
