import Logo from "../../../assets/images/logos/juve_logo.png";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 2, textAlign: "center", backgroundColor: "primary.main", marginTop: 'auto' }}
    >
      <img src={Logo} alt={Logo} width={40} />
      <Typography mt={1}>
        Juventus Football Club 2023. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
