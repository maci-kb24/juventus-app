import { useState } from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import Jersey from "../../assets/images/jersey.png";

const Subscribe = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");


  const handleInputChange = (e) => {
    e.preventDefault();
    const emailValue = e.target.value; // Get the email value from the event
    setInputValue(emailValue); // Update inputValue state with the email
    setIsValidEmail(/^\S+@\S+\.\S+$/.test(emailValue)); // Set isValidEmail based on the validation
    setErrorMessage(""); // Clear error message
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    // Your form submission logic goes here.
    console.log('email added', inputValue)
    setInputValue('')
  };

  return (
    <Box
      component="section"
      className="subscribe"
      sx={{ backgroundColor: "#fff" }}
    >
      <Container maxWidth="md">
        <Box sx={{ py: 9 }}>
          <Stack direction={"row"} spacing={2} alignItems={"center"} >
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
          <Stack component="form" alignItems={"center"} sx={{ pt: 3 }} onSubmit={handleFormSubmit}>
            <Typography variant="h5" sx={{ color: "text.secondary", pb: 1 }}>
              Enter your email
            </Typography>
            <TextField className="email-input"
              label="Email"
              variant="outlined"
              sx={{ width: "30%", color: '#000' }}
              value={inputValue}
              onChange={handleInputChange}
              error={!isValidEmail} // Apply error style if email is invalid
              helperText={errorMessage}
            />
            <Button
              size="lg"
              sx={{
                backgroundColor: "background.error",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "background.error",
                },marginTop: '25px'
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
