// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
// React Router Imports
import { BrowserRouter } from "react-router-dom";
// Material UI Imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Component Imports
import App from "./App.jsx";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline enableColorScheme />

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
