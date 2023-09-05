import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Matches from "./pages/Matches";

function App() {
  return (
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
  );
}

export default App;
