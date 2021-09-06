import {
  FETCH_PRODUCTS,
  // FILTER_PRODUCTS_BY_ISFEATURED,
  // ORDER_PRODUCTS_BY_PRICE,
} from "../actions/types";

const initialState = {
  items: [],
  filteredItems: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, items: payload };

    default:
      return state;
  }
};

export default productReducer;
