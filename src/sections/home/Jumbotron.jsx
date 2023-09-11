import { Box, Stack, Typography } from "@mui/material";
import featured from "../../assets/images/featured.png";

const Jumbotron = () => {
  return (
    <Box
      component="section"
      className="jumbotron"
      sx={{ backgroundColor: "grey.main", minHeight: "100vh" }}
    >
      <Stack
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box position={"absolute"} left={"22%"} bottom={"-18%"}>
          <Typography sx={{ lineHeight: "3" }}>
            <Typography
              variant="h1"
              component="span"
              sx={{ backgroundColor: "error.main" }}
            >
              38
            </Typography>
            <br />{" "}
            <Typography
              variant="h3"
              component="span"
              sx={{
                backgroundColor: "error.main",
                textTransform: "uppercase",
              }}
            >
              seria a
            </Typography>
            <br />
            <Typography
              variant="h3"
              component="span"
              sx={{ backgroundColor: "error.main", textTransform: "uppercase" }}
            >
              championships
            </Typography>
          </Typography>
        </Box>
        <Box>
          <img src={featured} alt={featured} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Jumbotron;
