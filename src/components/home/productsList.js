import React from "react";
import Product from "../product/index";

class ProductsLis extends React.Component {
  render() {
    return (
      <section className="bg-white">
        <div className="container">
          <div className="wrap-title">
            <h3 className="section-title">
              <span>TRENDING</span>
            </h3>
            <p className="section-subtitle sub-title">Top view in this week</p>
          </div>
          <Product />
        </div>
      </section>
    );
  }
}

export default ProductsLis;
