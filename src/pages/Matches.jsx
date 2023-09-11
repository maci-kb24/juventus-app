import { Box } from "@mui/material";
import { MatchesDetails } from "../sections";
import { LeagueTable } from "../sections";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Matches = () => {
  return (
    <Box className="matches">
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
