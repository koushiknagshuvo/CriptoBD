import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import CriptoContext from "./Context/CriptoContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CriptoContext>
      <App />
    </CriptoContext>{" "}
  </React.StrictMode>
);
