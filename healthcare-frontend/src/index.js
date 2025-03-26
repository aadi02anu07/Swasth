import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PatientProvider } from "./context/PatientContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// Ensure axios sends credentials (cookies, authentication tokens)
axios.post("https://https://swasth-eyn6.onrender.com/login", data, {
  withCredentials: true
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PatientProvider>
    <ToastContainer />
    <App />
  </PatientProvider>
);
