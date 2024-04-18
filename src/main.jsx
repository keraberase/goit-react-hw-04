import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import Modal from "react-modal";
import "./index.css";

// Установить элемент приложения для react-modal
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
