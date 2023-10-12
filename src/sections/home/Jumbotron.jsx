import { Box, Stack, Typography } from "@mui/material";
import featured from "../../assets/images/featured.png";
import { Slide } from "react-awesome-reveal";


const Jumbotron = () => {
  return (
    <Box
      component="section"
      className="jumbotron"
      sx={{ backgroundColor: "grey.main" }}
    >
      <Stack
        direction="row"
        justifyContent={"center"}
        position={"relative"}
        pt={8} sx={{height: '35rem'}}
      >
        <Box flex={"0 0 33%"}>
          <Slide direction="left" triggerOnce>
          <Box position={"relative"} left={"65%"} bottom={"-30%"} >
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
          </Slide>
         
        </Box>
        <Box flex={"0 0 33%"}>
          <Slide direction={"down"} triggerOnce>
          <Box position={"relative"} left={"10%"} sx={{ transform: 'translateY(65px)' }}>
            <img src={featured} alt={featured} height={257}  />
          </Box>
          </Slide>
        </Box>
      </Stack>
    </Box>
  );
};

export default Jumbotron;
