import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
