import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import "@fontsource/righteous";
import "@fontsource/righteous/400.css";
import Layout from "./components/Layout/Layout";
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
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#333333",
    },
    background: {
      default: "#333333",
    },
  },
  typography: {
    fontFamily: "Righteous",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
