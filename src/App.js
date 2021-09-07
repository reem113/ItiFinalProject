import { React, useState } from "react";
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
import ContactUs from "./components/contactus";
import PlaceOrder from "./components/placeorder";
import Profile from "./components/profile";
import Footer from "./components/home/footer";

function App() {
  const [token, setToken] = useState();
  console.log("App.js", token);

  return (
    <Router>
      <ReactNotification />
      <Header
        token={token}
        setToken={setToken} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
        <Route path="/about" exact component={About} />
        <Route path="/product" exact component={Product} />
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route path="/Account" exact component={Account} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/wishlist" exact component={Wishlist} />
        <Route path="/login" exact>
          <Login setToken={setToken} />
        </Route>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/placeOrder" exact component={PlaceOrder} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="*" exact component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
