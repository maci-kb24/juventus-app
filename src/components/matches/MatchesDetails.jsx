import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MatchesDetailsCard from "./MatchDetailsCard";

const MatchesDetails = () => {
  return (
    <Box sx={{ backgroundColor: "grey.light" }} className="matches-details">
      <Stack
        className="matches-filter"
        direction={"row"}
        sx={{ borderBottom: "1px solid #000003" }}
      >
        <Box
          className="show-match"
          sx={{ borderRight: "1px solid #000003", p: 2 }}
        >
          <Typography variant="body1" color={"text.dark"} pb={0.5}>
            Show Match
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined error button group"
          >
            <Button sx={{ marginRight: 1 }}>ALl</Button>
            <Button sx={{ marginRight: 1 }}>Played</Button>
            <Button>Not played</Button>
          </ButtonGroup>
        </Box>
        <Box
          className="game-result"
          sx={{ borderRight: "1px solid #000003", p: 2 }}
        >
          <Typography variant="body1" color={"text.dark"} pb={0.5}>
            Game Result
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined error button group"
          >
            <Button sx={{ marginRight: 1 }}>W</Button>
            <Button sx={{ marginRight: 1 }}>D</Button>
            <Button>L</Button>
          </ButtonGroup>
        </Box>
      </Stack>
      <MatchesDetailsCard />
    </Box>
  );
};

export default MatchesDetails;
