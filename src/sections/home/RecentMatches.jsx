import { Box, Button, CardHeader, Container, Stack, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Grid from "@mui/material/Unstable_Grid2";
import { matches } from "../../matches";

const RecentMatches = () => {
  return (
    <Box sx={{ py: 8 }} className="recent-matches">
      <Container maxWidth="md">
        <Box>
          <Button
            sx={{ color: "text.primary", backgroundColor: "background.error" }}
          >
            Matches
          </Button>
        </Box>
        <Grid2 container spacing={2} sx={{ my: 7.5 }}>
        {matches.slice(0,6).map(match => (
          <Grid xs={4} key={match.id}>
            <Card sx={{ minWidth: 260 }}>
              <CardHeader>
                <Typography fontSize={'.75rem'}>
                  {match.date}
                </Typography>
                </CardHeader>
              <CardContent>
                <Stack direction={'row'}>
                  <Box>
                  <img src={match.home_img}
        alt="Home team image" />
                  </Box>
                  <Box>
                  <Typography
                  sx={{ fontSize: '1.5rem' }}
                  color="text.secondary"
                  gutterBottom
                >
                  {match.home_team}
                </Typography>
                </Box>
                <Box marginLeft={'auto'}>
                <Typography variant="h5"  color={'black'} >
                 {match.home_result}
                </Typography>
                </Box>
                </Stack>
                <Stack direction={'row'}>
                  <Box>
                    <img src={match.away_img} alt=" away team image"/>
                  </Box>
                  <Box>
                  <Typography sx={{ mb: 1.5, fontSize: '1.5rem' }} color="text.secondary">
                  {match.away_team}
                </Typography>
                  </Box>
                  <Box marginLeft={'auto'}>
                  <Typography variant="h5" color={'black'}>
                 {match.home_result}
                </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid2>
        <Box>
          <Button link
              href="/matches"
            sx={{ color: "text.primary", backgroundColor: "background.error" }}
          >
            see more matches
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RecentMatches;
