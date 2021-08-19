import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="product_item_wrap">
        <div className="product_img_wrap">
          <div className="product_img">
            <Link to="">
              <img
                className="img-fluid "
                src="//cdn.shopify.com/s/files/1/0551/8001/products/black_canvas_stripe_sole_trainer_1_064e417e-408b-4549-b55f-d9135624eaca_270x340_crop_center.jpg?v=1612426177"
                alt="product"
              />
            </Link>
            <div className="badge_wrap">
              <span className="product_badge product-sale-price">–7%</span>
              <span className="product_badge new">New</span>
              <span className="product_badge sale">Sale</span>
            </div>
          </div>
        </div>

        <div className="product_info">
          <div className="list-middle">
            <h6 className="product_name">
              <Link to="">Black Canvas Stripe Sole Trainer</Link>
            </h6>
          </div>
          <div className="list-right">
            <div className="product-price-container">
              <span className="product-price  product-sale-price ">
                <span className="money" data-currency-usd="$115.00">
                  $115.00
                </span>
              </span>

              <span className="product-regular-price">
                <span className="money" data-currency-usd="$125.00">
                  $125.00
                </span>
              </span>
              <span className="product-percent-price"> 8% OFF</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
