import { Box, Button, CardHeader, Container, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Grid from "@mui/material/Unstable_Grid2";

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
          <Grid xs={4}>
            <Card sx={{ minWidth: 260 }}>
              <CardHeader subheader="01.20.2023"></CardHeader>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader subheader="01.20.2023"></CardHeader>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader subheader="01.20.2023"></CardHeader>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader subheader="01.20.2023"></CardHeader>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader subheader="01.20.2023"></CardHeader>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader subheader="01.20.2023"></CardHeader>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
