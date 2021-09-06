import { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
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
  AiFillCloseCircle,
} from "react-icons/ai";

import { addToCart } from "../../redux/actions/cartActions";
// import { cartReducer } from "../../redux/reducers";

const Header = (props) => {
  // // console.log("cart from header", cart);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

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
                <Link className="right-link" to="/wishlist">
                  {/* {wishlist && ( */}
                  <>
                    <AiOutlineHeart />
                    <span className="counter cart">wishlist.length</span>
                  </>
                  {/* )} */}
                </Link>
              </li>
              <li>
                <Link className="right-link" to="/cart">
                  <AiOutlineShoppingCart />
                  <span className="counter cart">
                    {cart.length === 0 ? "0" : cart.length}
                  </span>
                </Link>
              </li>
            </ul>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

// export default Header;
const mapStateToProps = (state) => ({
  cartList: state.cart,
});
export default connect(mapStateToProps, { addToCart })(Header);
