import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// Asker Links React Context Provider
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
      <ToastContainer closeButton={false} position="top-right" />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
