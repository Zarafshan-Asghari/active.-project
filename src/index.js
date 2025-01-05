// import React from "react";
// import ReactDOM from "react-dom/client";

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Create a root element
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the app using the new createRoot API
root.render(
  <Router>
    <App />
  </Router>
);
