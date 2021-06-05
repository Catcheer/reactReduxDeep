import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reduxStore/index";
import App from "./App";
const store = createStore(reducer);

const RootApp = (
  <Provider store={store}>
    <App />
  </Provider>
);
console.log(RootApp);

const rootElement = document.getElementById("root");
ReactDOM.render(RootApp, rootElement);
