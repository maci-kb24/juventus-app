import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "normalize.css";
import "@fontsource/righteous";
import "@fontsource/righteous/400.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
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
      contrast: "#BDBDBD",
      dark: "#000000",
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
