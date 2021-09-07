import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./types";
import { messageNotification } from "../util";

export const addToWishlist = (product) => (dispatch) => {
  const wishlist = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

  wishlist.push({ ...product, liked: true });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  return dispatch({
    type: ADD_TO_WISHLIST,
    payload: JSON.parse(
      localStorage.getItem("wishlist"),
      messageNotification(
        "success",
        "GREATE",
        "Added Successefully to the Wishlist"
      )
    ),
  });
};

export const removeFromWishlist = (product) => (dispatch) => {
  const wishlist = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];
  const newWishlistList = wishlist.filter((a) => a._id !== product._id);

  localStorage.setItem("wishlist", JSON.stringify(newWishlistList));
  return dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: JSON.parse(
      localStorage.getItem("wishlist"),
      messageNotification(
        "danger",
        "SORRY",
        "Removed Successefully from the Wishlist"
      )
    ),
  });
};
