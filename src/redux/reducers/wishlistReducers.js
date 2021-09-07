import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/types";
// import {} from '../util'

const initialState = {
  wishlist: [],
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: payload };
    case REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: payload };

    default:
      return state;
  }
};

export default wishlistReducer;
