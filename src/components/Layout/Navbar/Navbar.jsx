import Logo from "../../../assets/images/logos/juve_logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <a>
            <img src={Logo} alt={Logo} height={64} width={64} />
          </a>
        </div>
        <div>
          <ul>
            <li>THE TEAM</li>
            <li>MATCHES</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
