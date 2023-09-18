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
        position={"relative"}
        pt={8}
      >
        <Box flex={"0 0 33%"}>
          <Box position={"relative"} left={"35%"} bottom={"-50%"}>
            <Typography sx={{ lineHeight: "3" }}>
              <Typography
                variant="h1"
                component="span"
                sx={{ backgroundColor: "error.main" }}
              >
                38
              </Typography>
              <br />
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
                sx={{
                  backgroundColor: "error.main",
                  textTransform: "uppercase",
                }}
              >
                championships
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box flex={"0 0 33%"}>
          <Box position={"relative"} left={"20%"}>
            <img src={featured} alt={featured} height={"15rem"} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Jumbotron;
