/** @jsxRuntime classic */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";

// Suppress TypeScript error for side-effect CSS import when no type declarations are present
// @ts-ignore: Cannot find module or type declarations for side-effect import of './index.css'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/Future-x_Website">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
