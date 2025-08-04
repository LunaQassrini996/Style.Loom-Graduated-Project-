// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import CardContainer from "./Components/CardContainer";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CardContainer />
    </Provider>
  </React.StrictMode>
);
