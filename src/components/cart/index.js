import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../counter";
import { AiFillCloseCircle } from "react-icons/ai";

const ShoppingCart = () => {
  const [cart, setCart] = useState(null);
  const [cartChange, setCartChange] = useState(false);
  // let isDeleted = false;

  const URL =
    "http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart";

  const getAllCartProducts = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCart(data.user.cart);
    } catch (error) {
      console.log("error", error);
    }
  };
  const removeCartProduct = async (productId) => {
    const URL = `http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart/${productId}`;
    try {
      const response = await fetch(URL, {
        method: "DELETE",
      });
      const data = await response.json();

      //setCart(data.user.cart);
      console.log("data.user.cart", data.user.cart);
      // isDeleted = !isDeleted;
      setCartChange(!cartChange);
    } catch (error) {
      console.log("error", error);
    }
  };
  const changeProductQuantity = async (productId, count) => {
    const URL = `http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/cart/${productId}`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      });
      const data = await response.json();

      //setCart(data.user.cart);
      console.log("data.user.cart", data);
      // isDeleted = !isDeleted;
      setCartChange(!cartChange);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllCartProducts(URL);
  }, [cartChange]);

  return (
    <section className="cart_wrapper">
      {cart?.length && (
        <div className="container mt-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Remove</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index, arr) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div
                          className="product-remove"
                          onClick={() => removeCartProduct(product.product._id)}
                        >
                          <AiFillCloseCircle />
                        </div>
                      </td>
                      <td>
                        <div className="table-product-view">
                          <img
                            src={product.product.images[0]}
                            alt="product name"
                          />
                        </div>
                      </td>
                      <td>
                        <span className="product_name">
                          {product.product.name}
                        </span>
                      </td>
                      <td>
                        <div>{product.product.price} $</div>
                      </td>
                      <td>
                        <div>
                          <Counter
                            product={product}
                            cartItemId={product.product._id}
                            changeProductQuantity={changeProductQuantity}
                          />
                        </div>
                      </td>
                      <td>
                        <span>${product.product.price * product.quantity}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="form-container center">
            <span className="form-label">Total</span>
            <h2>
              $
              {cart.reduce((acc, cur) => {
                return (acc += cur.quantity * cur.product.price);
              }, 0)}
            </h2>

            <div className="d-flex justify-content-center p-2">
              <Link className="btn btn-main" to="/checkout">
                To Checkout &gt;&gt;{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
