import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/nav/nav.css";
import "./components/footer/footer.css";
import "./components/products/product.css";
import "./components/products/earbuds/earbuds.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
