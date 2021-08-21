import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Account from "./components/account";
import Product from "./components/product/";
import Category from "./components/category";
import Favourite from "./components/favourite";
import Cart from "./components/cart";
import About from "./components/about";
import Notfound from "./components/error";
import Login from "./components/login";
import SignUp from "./components/signup";
import Checkout from "./components/checkout";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
        <Route path="/about" exact component={About} />
        <Route path="/product" exact component={Product} />
        <Route path="/Account" exact component={Account} />
        <Route path="/favourite" exact component={Favourite} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="*" exact component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
