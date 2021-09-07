import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const cartList = localStorage.getItem("cartList")
  ? JSON.parse(localStorage.getItem("cartList"))
  : [];
const initialState = { cart: cartList };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
