import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyle from "./globalStyles";
import "./fonts/fonts.css";
import ScrollToTop from "./utils/ScrollToTop";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
