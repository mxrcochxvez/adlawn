import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
