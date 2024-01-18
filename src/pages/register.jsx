import { Box } from "@mui/material";
import SignUp from "../components/SignUp";

const Register = () => {
  return (
    <Box className="admin" sx={{backgroundColor: 'white', padding: '80px 0px'}}>
        <SignUp />
    </Box>
  )
}

export default Register