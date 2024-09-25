import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "modern-normalize";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
