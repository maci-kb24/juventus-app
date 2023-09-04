import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Matches from "./pages/Matches";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/team" Component={Team} />
            <Route path="/matches" Component={Matches} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
