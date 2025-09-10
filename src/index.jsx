import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./styles/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
