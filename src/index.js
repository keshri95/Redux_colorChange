import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import App from "./App";
// // const rootElement = document.getElementById("root");
// // const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
