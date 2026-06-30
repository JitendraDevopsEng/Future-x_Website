/** @jsxRuntime classic */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 1. Yahan BrowserRouter ki jagah HashRouter kiya
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";

// Suppress TypeScript error for side-effect CSS import when no type declarations are present
// @ts-ignore: Cannot find module or type declarations for side-effect import of './index.css'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* 2. Yahan HashRouter lagaya aur basename ko hata diya */}
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);