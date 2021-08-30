import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@material-ui/lab//esm/Rating";
import Divider from "@material-ui/core/Divider";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { store } from "react-notifications-component";
import $ from "jquery";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";

let notification = {
  title: "Wonderful!",
  message: "Configurable",
  type: "success",
  insert: "top",
  container: "center",
  animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__fadeOut"], // `animate.css v4` classes
};

const addToCart = async (productId, event) => {
  const URL =
    "http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart";
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: productId }),
    });
    const data = await response.json();

    event.target.classList.remove("btn-main");
    event.target.setAttribute("disabled", true);

    if (!data.success) {
      store.addNotification({
        ...notification,
        title: "Error!",
        message: "Product is already in cart!",
        type: "danger",
        container: "top-left",
        dismiss: {
          duration: 2000,
        },
      });
      return;
    }

    store.addNotification({
      ...notification,
      container: "top-left",
      dismiss: {
        duration: 2000,
      },
    });

    console.log("event", event);
    console.log("data", data);
    // setIsAdded();
  } catch (error) {
    console.log("error", error);
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
      <div className="details">
        {product && (
          <>
            <div className="col-12 col-xl-6 productSwiper  m-5 ">
              <Swiper effect="fade" speed={600} navigation={true}>
                {product.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={"product-Slide-" + index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="card col-12 col-xl-6 p-5 mt-1">
              <h3>{product.name}</h3>
              <h2>${product.price}</h2>
              <span className="m-1">
                Brand: <b>{product.brand}</b>
              </span>
              <span className="m-1">
                Availability:{" "}
                {product.countInStock > 0 ? (
                  <b>{product.countInStock}</b>
                ) : (
                  <b style={{ color: "#ea3253" }}>out of Stock</b>
                )}
              </span>
              <span className="m-1">
                Category: <b>{product.category.name}</b>
              </span>
              <span className="m-1">
                Rating:
                <Rating name="read-only" value={product.rating} readOnly />
              </span>
              <Divider className="mt-3 mb-3" />
              <span style={{ color: "black" }} className="m-2">
                {product.shortDescription}
              </span>
            </div>
          </>

        )}
      </div>
      {product && (
        <>
          <div className="cart_action m-auto col-12 center">
            <button
              type="button"
              className="btn btn-main m-3 p-4"
              title="Add to cart"
              onClick={(event) => addToCart(product._id, event)}
            >
              <span className="icon p-2">
                <AiOutlineShoppingCart />
              </span>
              Add to cart
            </button>
            <button
              type="button"
              className="btn btn-border m-3 p-4"
              title="Add to wishlist"
            >
              <span className="icon p-2">
                <AiOutlineHeart />
              </span>
              Add to wishlist
            </button>
          </div>
          <Divider className="m-3" />
          <div className="col-12 m-2">
            <h2 className="m-3">Description:</h2>
            <p style={{ color: "black" }} className="m-2 col-11 p-2">{product.description}</p>


          </div>
        </>
      )};
    </>

  );
};

export default ProductDetails;
