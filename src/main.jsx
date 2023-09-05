import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import "@fontsource/righteous";
import "@fontsource/righteous/400.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    error: {
      main: "#EF484D",
    },
    grey: {
      main: "#CCCCCC",
      light: "#E0E0E0",
      lighter: "#EDEDED",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#333333",
    },
    background: {
      default: "#333333",
      error: "#EF484D",
      dark: "#212121",
    },
  },
  typography: {
    fontFamily: "Righteous",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
