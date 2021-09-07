import { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
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

<<<<<<< HEAD
const Header = ({ cart, onRemoveCartProduct, wishlist, token, setToken }) => {
  // console.log("cart from header", cart);

  const history = useHistory();

=======
import { addToCart } from "../../redux/actions/cartActions";
// import { cartReducer } from "../../redux/reducers";

const Header = (props) => {
  // // console.log("cart from header", cart);
>>>>>>> 6f2c89c77666ac48c3e6ccfbaf537b3bbb9bda76
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

<<<<<<< HEAD
  console.log("token", token);

  const handleUserButton = () => {
    (token) ? history.push("/profile") : history.push("/account");
  }

  const handleLogout = () => {
    localStorage.removeItem("User Token");
    localStorage.removeItem("ID");
    localStorage.removeItem("Email");
    setToken(null);
    history.push("/account")
  }
=======
  const { cart } = useSelector((state) => state);
  console.log("cart in header", cart);
  console.log("cartList length", cart.length);

  const dispatch = useDispatch();
  // // console.log("cart length in header", cart.cartList.cartList.length);
  // console.log("props", props);
  const { cartList } = props;
  console.log("cartlist props", cartList);
  // const [cartCounter, setCartCounter] = useState(0);
  // useEffect(() => {
  //   dispatch(addToCart());
  // }, [setCartCounter]);
  // console.log("cartCounter", cartCounter);
>>>>>>> 6f2c89c77666ac48c3e6ccfbaf537b3bbb9bda76

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
                {
                  <span className="right-link" onClick={handleUserButton}>
                    <AiOutlineUser />
                  </span>}
              </li>
              <li>
                <Link className="right-link" to="/wishlist">
<<<<<<< HEAD
                  {wishlist && token && (
                    <>
                      <AiOutlineHeart />
                      <span className="counter cart">{wishlist.length}</span>
                    </>
                  )}
=======
                  {/* {wishlist && ( */}
                  <>
                    <AiOutlineHeart />
                    <span className="counter cart">wishlist.length</span>
                  </>
                  {/* )} */}
>>>>>>> 6f2c89c77666ac48c3e6ccfbaf537b3bbb9bda76
                </Link>
              </li>
              <li>
                <Link className="right-link" to="/cart">
<<<<<<< HEAD
                  {cart && token && (
                    <>
                      <AiOutlineShoppingCart />
                      <span className="counter cart">{cart.length}</span>
                    </>
                  )}
                </Link>
                {token &&
                  <span className="right-link second-color" >
                    <span className="logout" onClick={handleLogout}>Logout</span>
                  </span>
                }
                {/* <span className="right-link" onClick={handleToggleSidebar}>
                  {cart && (
                    <>
                      <AiOutlineShoppingCart />
                      <span className="counter cart">{cart.length}</span>
                    </>
                  )}
                </span> */}
=======
                  <AiOutlineShoppingCart />
                  <span className="counter cart">
                    {cart.length === 0 ? "0" : cart.length}
                  </span>
                </Link>
>>>>>>> 6f2c89c77666ac48c3e6ccfbaf537b3bbb9bda76
              </li>
            </ul>
          </Collapse>
        </div>
<<<<<<< HEAD
      </Navbar >

      <div
        className={isSidebarOpen ? "sideMenuProducts show" : "sideMenuProducts"}
      >
        <button type="button" className="close" onClick={handleToggleSidebar}>
          x
        </button>
        {cart && (
          <>
            {cart.length > 0 ? (
              <>
                {cart.map((product, index, arr) => {
                  return (
                    <div className="card single-product-wrapper" key={index}>
                      <div className="card-image">
                        <img
                          src={product.product.images[0]}
                          alt="product name"
                        />
                      </div>
                      <div className="card-body product-body">
                        <h5 className="product-title">
                          {product.product.name}
                        </h5>
                        <span className="quantity">
                          Q: {product.quantity}
                          <span className="Price-amount amount">
                            {product.product.price}
                          </span>
                          $
                        </span>
                      </div>
                      <div
                        className="remove-product"
                        onClick={() => onRemoveCartProduct(product.product._id)}
                      >
                        <AiFillCloseCircle />
                      </div>
                    </div>
                  );
                })}

                <div className="d-block text-center">
                  <Link
                    className="btn btn-main btn-200"
                    to="/cart"
                    cart={cart}
                  // removeCartProduct={removeCartProduct}
                  // changeProductQuantity={changeProductQuantity}
                  // {...props}
                  >
                    show cart
                  </Link>
                </div>
              </>
            ) : (
              <p>No products in the cart.</p>
            )}
          </>
        )}
      </div>
    </div >
=======
      </Navbar>
    </div>
>>>>>>> 6f2c89c77666ac48c3e6ccfbaf537b3bbb9bda76
  );
};

// export default Header;
const mapStateToProps = (state) => ({
  cartList: state.cart,
});
export default connect(mapStateToProps, { addToCart })(Header);
