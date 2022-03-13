import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Toaster position="top-center" reverseOrder={false} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
