import {
  Box,
  Container,
  Input,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Jersey from "../../assets/images/jersey.png";

const Subscribe = () => {
  return (
    <Box
      component="section"
      className="subscribe"
      sx={{ backgroundColor: "#fff" }}
    >
      <Container maxWidth="md">
        <Box sx={{ py: 9 }}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Box>
              <Typography
                variant="h1"
                sx={{ textTransform: "uppercase", color: "grey.light" }}
              >
                win a jersey
              </Typography>
            </Box>
            <Box>
              <img
                src={Jersey}
                alt={Jersey}
                style={{ height: "auto", maxWidth: "100%" }}
              />
            </Box>
          </Stack>
          <Stack alignItems={"center"} sx={{ pt: 3 }}>
            <Typography variant="h5" sx={{ color: "text.secondary", pb: 1 }}>
              Enter your email
            </Typography>
            <Input
              size="lg"
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                backgroundColor: "grey.lighter",
                color: "black",
                p: "8px 16px",
                width: "35%",
              }}
            ></Input>
            <Button
              size="lg"
              sx={{
                backgroundColor: "background.error",
                color: "text.primary",
              }}
            >
              Enroll
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;
