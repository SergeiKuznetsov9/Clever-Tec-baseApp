import React from "react";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
