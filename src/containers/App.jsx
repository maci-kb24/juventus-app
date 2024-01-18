import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home";
import Team from "../pages/team";
import Matches from "../pages/matches";
import Login from '../pages/login';
import Register from "../pages/register";
import "./app.css";


function App() {
  return (
    <Router>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/team" Component={Team} />
          <Route path="/matches" Component={Matches} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
