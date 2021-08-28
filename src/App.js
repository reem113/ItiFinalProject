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
import Favourite from "./components/favourite";
import Cart from "./components/cart";
import About from "./components/about";
import Notfound from "./components/error";
import Login from "./components/login";
import SignUp from "./components/signup";
import Checkout from "./components/checkout";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const URL = "http://localhost:8000/api/v1/products/";
    const getAllProducts = async () => {
      try {
        const response = await fetch(URL);
        const allProducts = await response.json();
        setProducts(allProducts.productList);
        console.log("data ==>", allProducts.productList);
      } catch (error) {
        console.log("error", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <Router>
      <ReactNotification />
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home products={products} {...props} />}
        />
        <Route path="/category" exact component={Category} />
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
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/favourite" exact component={Favourite} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="*" exact component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
