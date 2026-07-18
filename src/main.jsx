import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { PageProvider } from "./context/PageContext";
ReactDOM.createRoot(document.getElementById("root")).render(
 

<ThemeProvider>
  <PageProvider>
    <App />
  </PageProvider>
</ThemeProvider>,
);
