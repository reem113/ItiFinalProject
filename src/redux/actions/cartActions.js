import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import { messageNotification } from "../util";
export const addToCart = (product) => (dispatch) => {
  const cartList = localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
  if (cartList.length) {
    const itemInCartIndex = cartList.findIndex(
      (cartItem) => cartItem._id === product._id
    );
    if (itemInCartIndex !== -1) {
      cartList[itemInCartIndex].count++;
    } else {
      cartList.push({ ...product, count: 1 });
    }
  } else {
    cartList.push({ ...product, count: 1 });
  }

  localStorage.setItem("cartList", JSON.stringify(cartList));
  return dispatch({
    type: ADD_TO_CART,
    payload: JSON.parse(
      localStorage.getItem("cartList"),
      messageNotification(
        "success",
        "GREATE",
        "Added Successefully to the cart"
      )
    ),
  });
};

export const removeFromCart = (product) => (dispatch) => {
  const cartList = localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
  const newCartList = cartList.filter((a) => a._id !== product._id);
  localStorage.setItem("cartList", JSON.stringify(newCartList));
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: JSON.parse(
      localStorage.getItem("cartList"),
      messageNotification(
        "danger",
        "SORRY",
        "Removed Successefully from the Carrt"
      )
    ),
  });
};
