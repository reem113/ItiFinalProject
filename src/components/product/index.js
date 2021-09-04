import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { store } from "react-notifications-component";

let notification = {
  title: "Wonderful!",
  message: "Product Added Successfully",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated animate__fadeIn"],
  animationOut: ["animate__animated animate__fadeOut"],
  dismiss: {
    duration: 2000,
  },
};

const Product = ({ product }) => {
  // const [isAdded, setIsAdded] = useState(false);
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
        });
        return;
      }

      store.addNotification({
        ...notification,
      });

      console.log("event", event);
      console.log("data", data);
      // setIsAdded();
    } catch (error) {
      console.log("error", error);
    }
  };
  //
  const addToFav = async (productId, event) => {
    const URL =
      "http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/wishlist";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: productId }),
      });
      const data = await response.json();

      event.target.classList.add("btn-fav");
      event.target.setAttribute("disabled", true);

      if (!data.success) {
        store.addNotification({
          ...notification,
          title: "Error!",
          message: "Product is already in Favorite!",
          type: "danger",
        });
        return;
      }

      store.addNotification({
        ...notification,
      });

      console.log("event", event);
      console.log("data", data);
      // setIsAdded();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="product_item_wrap">
      <div className="product_img_wrap">
        <Link to={`/products/${product._id}`}>
          <img className="img-fluid " src={product.images[0]} alt="product" />
        </Link>
        <div className="badge_wrap">
          <span className="product_badge product-sale-price">5% off</span>
        </div>
      </div>

      <div className="product_info">
        <div className="list-middle">
          <h6 className="product_name">
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </h6>
          <p className="product_description">{product.shortDescription}</p>
        </div>
        <div className="product-price-container">
          <span className="product-price  product-sale-price ">
            {product.price}$
          </span>
          <span className="product-regular-price">{product.price + 10}$</span>
        </div>
      </div>
      <div className="cart_action">
        <button
          type="button"
          className="btn btn-main"
          title="Add to cart"
          onClick={(event) => addToCart(product._id, event)}
        >
          <span className="icon">
            <AiOutlineShoppingCart />
          </span>
          Add to cart
        </button>
        <button
          type="button"
          className="btn btn-border"
          title="Add to wishlist"
          onClick={(event) => addToFav(product._id, event)}
        >
          <span className="icon">
            <AiOutlineHeart />
          </span>
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default Product;
