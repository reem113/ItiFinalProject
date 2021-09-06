import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./app.scss";

// Redux
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
