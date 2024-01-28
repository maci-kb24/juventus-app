import Logo from "../../../assets/images/logos/juve_logo.png";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{zIndex: '9999', boxShadow: 'none'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: "space-between", py: 1 }}>
        <Box>
          <Link to="/">
            <img src={Logo} alt="Logo" width={40} />
          </Link>
        </Box>
        <Box>
          <Link to="/team" >
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/matches">
            <Button color="inherit">Matches</Button>
          </Link>
          <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          {/* <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/team">
            The Team
          </Button> */}
          {/* <Button sx={{ color: "text.primary", backgroundColor: "background.error", marginRight: '10px' }}  component={Link} to="/login">Log In</Button> */}
          {/* <Button sx={{ color: "text.primary", backgroundColor: "background.error" }}  component={Link} to="/register">Sign Up</Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
