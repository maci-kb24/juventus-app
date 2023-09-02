import "./App.css";
import { Jumbotron, RecentMatches, MeetPlayers, Subscribe } from "./components";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Jumbotron />
      <RecentMatches />
      <MeetPlayers />
      <Subscribe />
    </>
  );
}

export default App;
