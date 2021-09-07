import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@material-ui/lab//esm/Rating";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistAction";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import BreadCrumb from "./../breadcrumb/index";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const PURL = `http://localhost:8000/api/v1/products/${id}`;
    const getSingleProduct = async () => {
      try {
        const response = await fetch(PURL);
        const product = await response.json();
        console.log(product);
        setProduct(product.product);
      } catch (error) {
        console.log("error", error);
      }
    };
    getSingleProduct();
  }, [id]);

  return (
    <>
      <BreadCrumb />
      <section className="product_details_wrapper">
        {product && (
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 productSwiper">
                <Swiper effect="fade" speed={600} navigation={true}>
                  {product.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={"product-Slide-" + index} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 top-description">
                <h5 className="product_name d-flex justify-content-between">
                  <span className="product_name_text">{product.name}</span>
                  <span className="price second-color">${product.price}</span>
                </h5>
                <p>
                  Brand: <span className="bold ml-1">{product.brand}</span>
                </p>
                <p>
                  Availability:{" "}
                  {product.countInStock > 0 ? (
                    <span className="bold">{product.countInStock}</span>
                  ) : (
                    <span className="bold" style={{ color: "#ea3253" }}>
                      out of Stock
                    </span>
                  )}
                </p>
                <p>
                  Category:{" "}
                  <span className="bold">{product.category.name}</span>
                </p>
                <p>
                  Rating:
                  <Rating name="read-only" value={product.rating} readOnly />
                </p>
                <p>{product.shortDescription}</p>

                <div className="cart_action m-auto col-12 center mt-4">
                  <button
                    type="button"
                    className="btn btn-main btn-200 mx-3"
                    title="Add to cart"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <span className="icon p-2">
                      <AiOutlineShoppingCart />
                    </span>
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-border btn-200"
                    title="Add to wishlist"
                    onClick={() => dispatch(addToWishlist(product))}
                  >
                    <span className="icon p-2">
                      <AiOutlineHeart />
                    </span>
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12 bottom-details">
                <h2>Description:</h2>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductDetails;
