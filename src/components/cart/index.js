
import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Counter from "../counter";
import axios from "axios";
import { useHistory } from "react-router";

import { AiFillCloseCircle } from "react-icons/ai";
import BreadCrumb from "../breadcrumb";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { formatCurrency } from "../../redux/util";


const ShoppingCart = () => {
  const cartList = localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];


  const [cart, setCart] = useState(null);
  const history = useHistory();

  console.log("cartList", cartList);


  // const { cartList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    cartList.forEach((item) => {
      price += item.qty * item.price;
    });
    setTotalPrice(price);
  }, [cartList, totalPrice, setTotalPrice]);

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

  return (
    <>
      <BreadCrumb />
      <section className="cart_wrapper">
        {cartList.length === 0 ? (
          "Cart is empty"
        ) : (
          <div className="alert alert-success text-center">
            You have {cartList.length} items in the Cart. <hr />
          </div>
        )}
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
                            <Counter
                              item={item}
                              cartItemId={item._id}
                              handleAddToCart={addToCart}
                              // onChangeProductQuantity={changeProductQuantity}
                            />
                          </div>
                        </td>
                        <td>
                          <div>{item.price} $</div>
                        </td>
                        <td>
                          {/* ${item.price * item.quantity} */}
                          <span>{formatCurrency(totalPrice)}</span>
                        </td>
                        <td>
                          <div
                            className="product-remove"
                            // onClick={(e) =>
                            //   removeFromCart(this.props.cartItems, item)
                            // }
                            onClick={() => dispatch(removeFromCart(item.id))}
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
                      {/* $
                      {cartList.reduce((acc, cur) => {
                        return (acc += cur.quantity * cur.product.price);
                      }, 0)} */}
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

export default ShoppingCart;

// const mapStateToProps = (state) => ({
//   cartList: state.cart.items,
// });
// export default connect(mapStateToProps, { addToCart, removeFromCart })(
//   ShoppingCart
// );
