import axios from "axios";
import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_ISFEATURED,
  // ORDER_PRODUCTS_BY_PRICE,
} from "./types";

const URL = "http://localhost:8000/api/v1/products";
export const fetchProducts = () => (dispatch) => {
  fetch(URL)
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.productList)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data.productList });
      // console.log("dispatch products", data.productList);
    });
};

export const filterProducts = (products, isFeatured) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_ISFEATURED,
    payload: {
      isFeatured: isFeatured,
      items:
        isFeatured === true
          ? products
          : products.filter((product) => product.isFeatured === true),
    },
  });
};

// export const sortProducts = (items, sort) => (dispatch) => {
//   const products = items.slice();
//   if (sort !== "") {
//     products.sort((a, b) =>
//       sort === "lowestprice"
//         ? a.price > b.price
//           ? 1
//           : -1
//         : a.price < b.price
//         ? 1
//         : -1
//     );
//   } else {
//     products.sort((a, b) => (a.id > b.id ? 1 : -1));
//   }
//   dispatch({
//     type: ORDER_PRODUCTS_BY_PRICE,
//     payload: {
//       sort: sort,
//       items: products,
//     },
//   });
// };
