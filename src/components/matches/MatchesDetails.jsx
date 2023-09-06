import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { juve } from "../../assets/images/logos/teams";

const MatchesDetails = () => {
  return (
    <Box sx={{ backgroundColor: "grey.light" }} className="matches-details">
      <Stack className="matches-filter" direction={"row"}>
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
      <Box className="matches-info">
        <Stack
          direction={"row"}
          className="match-result"
          sx={{ borderBottom: "1px solid rgba(0,0,58,.5)" }}
        >
          <Box
            sx={{ borderRight: "1px solid rgba(0, 0, 58, 0.2)", pr: 2, m: 2 }}
          >
            <Box>
              <img src={juve} />
              <Typography variant="body1" color={"primary"}>
                Juvenutus
              </Typography>
              <Typography variant="body1" color={"secondary"}>
                2
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box></Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MatchesDetails;
