import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => (dispatch) => {
  const cartList = localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];

  console.log("cartList from act", cartList);
  // console.log("product from act", product);
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

  console.log("current cart list  from action", cartList);
  return dispatch({
    type: ADD_TO_CART,
    payload: JSON.parse(localStorage.getItem("cartList")),
  });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartList = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartList } });
};
