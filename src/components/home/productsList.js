import React from "react";
import { Link } from "react-router-dom";
import Product from "../product";

const ProductsLis = (props) => {
  const { products } = props;

  return (
    <section className="bg-grey">
      <div className="container">
        <div className="wrap-title">
          <h3 className="section-title">
            <span>TRENDING PRODUCTS</span>
          </h3>
          <p className="section-subtitle sub-title">Top view in this week</p>
        </div>
        <div className="row">
          {products &&
            products.slice(0, 8).map((product, index) => (
              <div className="col-lg-3 col-md-3 col-sm-6" key={index}>
                <Product product={product} />
              </div>
            ))}
        </div>
        <div className="more-block text-center mt-4">
          <Link to="" className="btn btn-main btn-hover btn-200">
            Show More
          </Link>
        </div>
      </div>
    </section>

    // )}
  );
};

export default ProductsLis;
