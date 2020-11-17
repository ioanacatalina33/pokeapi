import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyle from "./globalStyles";
import "./fonts/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
