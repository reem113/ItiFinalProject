import { combineReducers } from "redux";
import productReducers from "./productReducers";
// import productDetail from "./productReducers";
import cartReducers from "./cartReducers";
import wishlistReducer from "./wishlistReducers";

const rootReducer = combineReducers({
  products: productReducers,
  // product: productDetail,
  cart: cartReducers,
  wishlist: wishlistReducer,
});

export default rootReducer;
