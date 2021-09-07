import { useState } from "react";
import { useDispatch, connect } from "react-redux";
import Logo from "../../images/logo_company.svg";
import { useHistory } from "react-router";

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
  AiFillCloseCircle,
} from "react-icons/ai";

import { removeFromCart } from "../../redux/actions/cartActions";
import { formatCurrency } from "../../redux/util";

const Header = (props) => {
  const token = props.token;

  // // console.log("cart from header", cart);
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const handleUserButton = () => {
    (token) ? history.push("/profile") : history.push("/account");
  }

  const handleLogout = () => {
    localStorage.removeItem("User Token");
    localStorage.removeItem("ID");
    localStorage.removeItem("Email");
    props.setToken(null);
    history.push("/account")
  }

  const cartList = localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];

  const wishlist = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];
  console.log("wishlist in header", wishlist);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar color="white" expand="md" className="fixed-top">
        <div className="container">
          <NavbarBrand to="/">
            <img src={Logo} alt="company" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="menu-wrapper">
            <span className="hamburger-menu"></span>
          </NavbarToggler>
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
                <span className="right-link" onClick={handleUserButton}>
                  <AiOutlineUser />
                </span>
              </li>
              <li>
                {token && (
                  <Link className="right-link" to="/wishlist">
                    <AiOutlineHeart />
                    <span className="counter cart">
                      {wishlist.length === 0 ? "0" : wishlist.length}
                    </span>
                  </Link>
                )}
              </li>
              <li>
                {token && (
                  <span className="right-link" onClick={handleToggleSidebar}>
                    <AiOutlineShoppingCart />
                    <span className="counter cart">
                      {cartList.length === 0 ? "0" : cartList.length}
                    </span>
                  </span>
                )}
              </li>
              <li>
                {token &&
                  <span className="right-link second-color" >
                    <span className="logout" onClick={handleLogout}>Logout</span>
                  </span>
                }
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
        {cartList.length === 0 ? (
          <span className="alert alert-danger text-center">
            "Your Cart is empty"
          </span>
        ) : (
          <>
            {cartList.map((product, index) => {
              return (
                <div className="card single-product-wrapper" key={index}>
                  <div className="card-image">
                    <img src={product.images[0]} alt="product name" />
                  </div>
                  <div className="card-body product-body">
                    <h5 className="product-title">{product.name}</h5>
                    <span className="quantity">
                      Q: {product.count} *
                      <span className="Price-amount amount">
                        {formatCurrency(product.price)}
                      </span>
                    </span>
                  </div>
                  <div
                    className="remove-product"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <AiFillCloseCircle />
                  </div>
                </div>
              );
            })}

            <div className="d-block text-center">
              <div className="btn btn-border btn-200 mb-3">
                Total :
                <span>
                  {formatCurrency(
                    cartList.reduce((acc, cur) => {
                      return (acc += cur.count * cur.price);
                    }, 0)
                  )}
                </span>
              </div>
              <Link className="btn btn-main btn-200" to="/cart">
                show cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
  wishlist: state.wishlist,
});
export default connect(mapStateToProps)(Header);
