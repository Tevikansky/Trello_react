import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cardholder from "./components/Cardholder";
import { Card } from "./components/Card";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App>
      <Cardholder title="TODO">
        <Card title="Test"/>
      </Cardholder>
      <Cardholder title="In Progress"></Cardholder>
      <Cardholder title="Testing"></Cardholder>
      <Cardholder title="Done"></Cardholder>
    </App>
  </React.StrictMode>
);
