import { useState } from "react";

import {
  Box,
  Container,
  // Input,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import Jersey from "../../assets/images/jersey.png";

const Subscribe = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validation

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsValidEmail(true); // Reset validation status when input changes
  };

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
                textTransform={"uppercase"}
                color={"grey.light"}
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
          <Stack component="form" alignItems={"center"} sx={{ pt: 3 }}>
            <Typography variant="h5" sx={{ color: "text.secondary", pb: 1 }}>
              Enter your email
            </Typography>
            {/* <Input
              size="lg"
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                backgroundColor: "grey.lighter",
                color: "black",
                p: "8px 16px",
                width: "35%",
              }}
            ></Input> */}
            <TextField
              label="Email"
              variant="outlined"
              // fullWidth
              sx={{ width: "30%" }}
              value={inputValue}
              onChange={handleInputChange}
              error={!isValidEmail} // Apply error style if email is invalid
              helperText={!isValidEmail ? "Invalid email address" : ""}
            />
            <Button
              size="lg"
              sx={{
                backgroundColor: "background.error",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "background.error",
                },
              }}
              type="submit"
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
