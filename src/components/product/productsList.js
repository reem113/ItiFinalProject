import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./index";

import { fetchProducts } from "../../redux/actions/productActions";
// import { filterProducts } from "../../redux/actions/productActions";

const ProductsList = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featuredProducts = products.items.filter(
    (product) => product.isFeatured === true
  );

  // render() {
  // console.log("featuredProducts from redux", products);
  // console.log("featuredProducts from redux", products.items.length);
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
          {featuredProducts.map((product) => (
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
              key={product._id}
            >
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
  // }
};

export default ProductsList;
