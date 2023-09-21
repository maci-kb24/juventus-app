import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DaniloFeatured from "../../assets/images/players/Def/DaniloFeatured.png";

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
          <Box className="players">
              <Card
                sx={{
                  minWidth: 240,
                  border: "9px solid white",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={DaniloFeatured}
                  alt={DaniloFeatured}
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
                         <Card
                sx={{
                  minWidth: 240,
                  border: "9px solid white",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={DaniloFeatured}
                  alt={DaniloFeatured}
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
              <Card
                sx={{
                  minWidth: 240,
                  border: "9px solid white",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={DaniloFeatured}
                  alt={DaniloFeatured}
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
              <Card
                sx={{
                  minWidth: 240,
                  border: "9px solid white",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={DaniloFeatured}
                  alt={DaniloFeatured}
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
              <Typography
                component="span"
                variant="h1"
                sx={{
                  backgroundColor: "primary.main",
                  display: "inline-block",
                  p: 1,
                  mb: 3,
                }}
              >
                Meet
              </Typography>
              <br />
              <Typography
                component="span"
                variant="h1"
                sx={{
                  backgroundColor: "primary.main",
                  display: "inline-block",
                  p: 1,
                  mb: 3,
                }}
              >
                The
              </Typography>
              <br />
              <Typography
                component="span"
                variant="h1"
                sx={{
                  backgroundColor: "primary.main",
                  display: "inline-block",
                  p: 1,
                  mb: 3,
                }}
              >
                Players
              </Typography>
            </Typography>
            <Button
              link
              href="/team"
              variant="contained"
              size="lg"
              sx={{
                backgroundColor: "background.error",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "background.error",
                },
              }}
            >
              Meet the team
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

//i want to create a card with a picture of the player and his name and number, and then have 4 of them in a row, and then each div will have a roll animation and overlap with slight position change top and left,should be easy to do with mui,since i can just use the card component and then add the roll animation to it, and then just change the position of

export default MeetPlayers;
