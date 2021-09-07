import React from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import Counter from "../counter";
import { AiFillCloseCircle } from "react-icons/ai";
import BreadCrumb from "../breadcrumb";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { formatCurrency } from "../../redux/util";

const ShoppingCart = (props) => {
  const history = useHistory();
  const cartList = localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
  const HandleRedirectPages = () => {
    const URL = `http://localhost:8000/api/v1/addresses/`
    const id = localStorage.getItem("ID");
    axios.get(URL)
      .then(res => {
        const uservalue = res.data.addressList.find(address => address._userId === id);
        (uservalue) ? history.push("/placeOrder") : history.push("/checkout");
      })
      .catch(err => { console.log(err); })
  }
  const dispatch = useDispatch();

  return (
    <>
      <BreadCrumb />
      <section className="cart_wrapper">
        <div className="cart-status">
          {cartList.length === 0 ? (
            <span className="alert alert-danger text-center">
              "Your Cart is empty"
            </span>
          ) : (
            <span className="alert alert-success text-center">
              You have {cartList.length} items in the Cart.
            </span>
          )}
        </div>

        {cartList.length > 0 && (
          <div className="container mt-5">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr className="bg-grey">
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="table-product-view">
                            <img src={item.images[0]} alt="product name" />
                          </div>
                        </td>
                        <td>
                          <span className="product_name">{item.name}</span>
                        </td>
                        <td>
                          <div>
                            <Counter item={item} cartItemId={item._id} />
                          </div>
                        </td>
                        <td>
                          <div>{formatCurrency(item.price)}</div>
                        </td>
                        <td>
                          <span>{formatCurrency(item.price * item.count)}</span>
                        </td>
                        <td>
                          <div
                            className="product-remove"
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            <AiFillCloseCircle />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-grey">
                  <tr>
                    <th colSpan="2">Total</th>
                    <th colSpan="2">
                      {formatCurrency(
                        cartList.reduce((acc, cur) => {
                          return (acc += cur.count * cur.price);
                        }, 0)
                      )}
                    </th>
                    <th colSpan="2">
                      <button className="btn btn-main btn-200" onClick={HandleRedirectPages}>
                        To Checkout
                      </button>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(
  ShoppingCart
);
