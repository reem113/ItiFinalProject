import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
// export default function (state = {}, action) {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return { ...state, items: action.payload.cartItems };
//     case REMOVE_FROM_CART:
//       return { ...state, items: action.payload.cartItems };

//     default:
//       return state;
//   }
// }
