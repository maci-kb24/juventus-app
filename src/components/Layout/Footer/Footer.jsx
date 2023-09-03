import Logo from "../../../assets/images/logos/juve_logo.png";
import { Box, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { useState } from "react";

const Footer = () => {
  return (
    <Box>
      {/* <Box sx={{ py: 2, textAlign: "center" }} className="footer">
        <img src={Logo} alt={Logo} width={40} />
        <Typography mt={1}>
          Juventus Football Club 2023. All Rights Reserved.
        </Typography>
      </Box> */}
      <BottomNavigation
        sx={{
          backgroundColor: "#212121",
          py: 2,
          height: "auto",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}

        <img src={Logo} alt={Logo} width={40} />
        <Typography mt={1}>
          Juventus Football Club 2023. All Rights Reserved.
        </Typography>
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
