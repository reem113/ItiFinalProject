import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  // FILTER_PRODUCTS_BY_ISFEATURED,
  // ORDER_PRODUCTS_BY_PRICE,
} from "../actions/types";

const initialState = {
  items: [],
  productDetail: {},
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, items: payload };
    case FETCH_PRODUCT_DETAILS:
      return { ...state, productDetail: payload };

    default:
      return state;
  }
};

export default productReducer;
