import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

const { StrictMode } = React;

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);