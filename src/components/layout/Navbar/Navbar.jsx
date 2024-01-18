import Logo from "../../../assets/images/logos/juve_logo.png";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{zIndex: '9999'}}>
      <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
        <Box>
          <Link to="/">
            <img src={Logo} alt="Logo" width={40} />
          </Link>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/team">
            The Team
          </Button>
          <Button color="inherit" component={Link} to="/matches">
            Matches
          </Button>
          <Button sx={{ color: "text.primary", backgroundColor: "background.error", marginRight: '10px' }}  component={Link} to="/login">Log In</Button>
          <Button sx={{ color: "text.primary", backgroundColor: "background.error" }}  component={Link} to="/register">Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
