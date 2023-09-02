import { Typography } from "@mui/material";
import Logo from "../../../assets/images/logos/juve_logo.png";
const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <a>
            <img src={Logo} alt={Logo} width={40} />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <Typography variant="h1">Home</Typography>
            </li>
            <li>
              <Typography variant="h3">The Team</Typography>
            </li>
            <li>Matches</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
