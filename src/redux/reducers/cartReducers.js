import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, payload };
    case REMOVE_FROM_CART:
      return { ...state, cartList: payload };

    default:
      return state;
  }
};

export default cartReducer;
