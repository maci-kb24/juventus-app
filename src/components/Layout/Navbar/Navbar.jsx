import Logo from "../../../assets/images/logos/juve_logo.png";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box style={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={Logo} alt="Logo" width={40} />
            </Link>
          </Box>
          <Box>
            {/* <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/team">
              The Team
            </Button>
            <Button color="inherit" component={Link} to="/matches">
              Matches
            </Button> */}
            <List>
              <ListItem>
                <Link to="/">
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/team">
                  <ListItemText primary="The Team" />
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/matches">
                  <ListItemText
                    primary="Matches"
                    sx={{ color: "text.primary" }}
                  />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Box className="header" display={"flex"}>
        <nav>
          <Box>
            <Link to="/">
              <img src={Logo} alt={Logo} width={40} />
            </Link>
          </Box>
          <Box></Box>
        </nav>
      </Box> */}
    </>
  );
};

export default Navbar;
