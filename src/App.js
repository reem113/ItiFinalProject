import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Header from "./components/header";
import Home from "./components/home";
import Account from "./components/account";
import Product from "./components/product/index.js";
import ProductDetails from "./components/product/productDetails";
import Category from "./components/category";
import Wishlist from "./components/wishlist";
import Cart from "./components/cart";
import About from "./components/about";
import Notfound from "./components/error";
import Login from "./components/login";
import SignUp from "./components/signup";
import Checkout from "./components/checkout";
import Footer from "./components/home/footer";
import PlaceOrder from "./components/placeOrder";

function App() {
  const id = localStorage.getItem("ID")
  const [products, setProducts] = useState(null);

  const [cartList, setCartList] = useState(null);
  const [cartChange, setCartChange] = useState(false);

  const [wishlist, setWishlist] = useState(null);
  const [wishlistChange, setWishlistChange] = useState(false);

  const removeCartProduct = async (productId) => {
    const URL = `http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart/${productId}`;
    try {
      const response = await fetch(URL, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("data.user.cart", data.user.cart);
      setCartChange(!cartChange);
    } catch (error) {
      console.log("error", error);
    }
  };
  const removeWishlistProduct = async (productId) => {
    const URL = `http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/wishlist/${productId}`;
    try {
      const response = await fetch(URL, {
        method: "DELETE",
      });
      const WishlistProducts = await response.json();
      console.log("data.user.wishlist", WishlistProducts.user.wishlist);
      setWishlistChange(!wishlistChange);
    } catch (error) {
      console.log("error", error);
    }
  };
  const changeProductQuantity = async (productId, count) => {
    const URL = `http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart/${productId}`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      });
      const data = await response.json();
      console.log("data.user.cart", data);
      setCartChange(!cartChange);
    } catch (error) {
      console.log("error", error);
    }
  };

  //ALL PRODUCTS
  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/products/");
      const allProducts = await response.json();
      setProducts(allProducts.productList);
      console.log("data ==>", allProducts.productList);
    } catch (error) {
      console.log("error", error);
    }
  };
  //WISHLIST
  const getWishlistProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/wishlist"
      );
      const WishlistProducts = await response.json();
      setWishlist(WishlistProducts.user.wishlist);
      console.log(
        "WishlistProducts ==>",
        WishlistProducts.user.wishlist.length
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  //CART
  const getAllCartProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart"
      );
      const cartProducts = await response.json();
      setCartList(cartProducts.user.cart);
      console.log("cartProducts ==>", cartProducts.user.cart.length);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllCartProducts(URL);
  }, [cartChange]);

  useEffect(() => {
    getWishlistProducts(URL);
  }, [wishlistChange]);

  console.log("wishlist from app js ==> ", wishlist);
  return (
    <Router>
      <ReactNotification />
      <Header
        cart={cartList}
        onRemoveCartProduct={removeCartProduct}
        wishlist={wishlist}
      />
      {/* <div render={(props) => <Header cartList={cartList} {...props} />} /> */}

      {/* <Header /> */}
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home products={products} {...props} />}
        />
        <Route path="/category" exact component={Category} />
        <Route path="/placeOrder" exact component={PlaceOrder} />
        <Route path="/about" exact component={About} />
        <Route
          path="/product"
          exact
          render={(props) => <Product products={products} {...props} />}
        />
        <Route path="/products/:id" exact>
          <ProductDetails />
        </Route>
        <Route path="/Account" exact component={Account} />
        <Route
          path="/cart"
          exact
          component={(props) => (
            <Cart
              cartList={cartList}
              onRemoveCartProduct={removeCartProduct}
              onChangeProductQuantity={changeProductQuantity}
              {...props}
            />
          )}
        />
        <Route
          path="/wishlist"
          exact
          render={(props) => (
            <Wishlist
              wishlist={wishlist}
              onRemoveWishlistProduct={removeWishlistProduct}
              {...props}
            />
          )}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="*" exact component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
