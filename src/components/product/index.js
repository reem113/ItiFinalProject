import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Product = ({ product }) => {
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
        <button type="button" className="btn btn-main" title="Add to cart">
          <span className="icon">
            <AiOutlineShoppingCart />
          </span>
          Add to cart
        </button>
        <button
          type="button"
          className="btn btn-border"
          title="Add to wishlist"
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
