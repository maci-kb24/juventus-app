import { Box } from "@mui/material";
import SignIn from "../components/SignIn";

const Login = () => {
  return (
    <Box className="admin" sx={{backgroundColor: 'white', padding: '80px 0px'}}>
      <SignIn />
    </Box>
  )
}

export default Login;