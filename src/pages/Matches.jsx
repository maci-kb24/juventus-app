import { Box } from "@mui/material";
import MatchesDetails from "../components/matches/MatchesDetails";
import LeagueTable from "../components/matches/LeagueTable";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Matches = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="matches">
      <Grid container>
        <Grid xs={7}>
          <MatchesDetails />
        </Grid>
        <Grid xs={5}>
          <LeagueTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Matches;
