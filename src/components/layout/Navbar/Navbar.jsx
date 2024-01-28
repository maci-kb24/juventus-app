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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
