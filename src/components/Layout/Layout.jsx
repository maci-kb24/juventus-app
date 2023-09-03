import PropTypes from "prop-types";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box className="main">{children}</Box>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
