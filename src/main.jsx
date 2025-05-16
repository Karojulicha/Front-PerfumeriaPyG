import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route } from "react-router";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
