import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyle from "./globalStyles";
import "./fonts/fonts.css";
import ScrollToTop from "./utils/ScrollToTop";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
