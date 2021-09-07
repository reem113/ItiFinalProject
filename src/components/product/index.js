import React from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions";

import { formatCurrency } from "../../redux/util";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  // console.log("singleProduct", product);

  return (
    <div className="product_item_wrap">
      <div className="product_img_wrap">
        <Link to={`/products/${product._id}`} product={product}>
          <img
            className="img-fluid "
            src={product.images[0]}
            alt={product.brand}
          />
        </Link>
        <div className="badge_wrap">
          <span className="product_badge product-sale-price">5% off</span>
        </div>
      </div>

      <div className="product_info">
        <div className="list-middle">
          <h6 className="product_name">
            <Link to={`/products/${product._id}`} product={product}>
              {product.name}
            </Link>
          </h6>
          <p className="product_description">{product.shortDescription}</p>
        </div>
        <div className="product-price-container">
          <span className="product-price  product-sale-price ">
            {/* {util.formatCurrency(product.price)}$ */}
            {formatCurrency(product.price)}
          </span>
          <span className="product-regular-price">
            {formatCurrency(product.price + 10)}
          </span>
        </div>
      </div>
      <div className="cart_action">
        <button
          type="button"
          className="btn btn-main"
          title="Add to cart"
          onClick={() => dispatch(addToCart(product))}
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
          // onClick={(event) => addToWishlist(product._id, event)}
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
