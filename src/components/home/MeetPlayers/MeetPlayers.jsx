import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Danilo from "../../../assets/images/players/Def/danilo.png";

const MeetPlayers = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundImage:
          "linear-gradient(129deg,#000000 7.14%,#ffffff 7.14%,#ffffff 50%,#000000 50%,#000000 57.14%,#ffffff 57.14%,#ffffff 100%);",
        backgroundSize: "9.01px 11.12px",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="md">
        <Stack direction={"row"} justifyContent={"center"}>
          <Box>
            <Card sx={{ minWidth: 260, border: "9px solid white" }}>
              <CardMedia
                component="img"
                height="240"
                image={Danilo}
                alt={Danilo}
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, fontWeight: 500 }}
                  color="text.secondary"
                >
                  Luiz Da Silva Danilo
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  6
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Typography variant="h1">
              Meet <br />
              The <br /> Players
            </Typography>
            <Button>Meet the team</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MeetPlayers;
