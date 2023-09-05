import { Box, Container, Stack, Typography } from "@mui/material";
import PlayerCard from "../components/team/PlayerCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Team = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 4,
        backgroundImage:
          "linear-gradient(129deg,#000000 7.14%,#ffffff 7.14%,#ffffff 50%,#000000 50%,#000000 57.14%,#ffffff 57.14%,#ffffff 100%);",
        backgroundSize: "9.01px 11.12px",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="xl">
        <Box className="goalkeepers">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              pb={3}
            >
              goalkeepers
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={2}>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
          </Stack>
        </Box>
        <Box className="defenders">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              pb={3}
            >
              defenders
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <PlayerCard />
            </Grid>
          </Grid>
        </Box>
        <Box className="midfielders">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              pb={3}
            >
              midfielders
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <PlayerCard />
            </Grid>
          </Grid>
        </Box>
        <Box className="attackers">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              pb={3}
            >
              attackers
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <PlayerCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
