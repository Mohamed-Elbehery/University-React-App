import "./header.scss";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className={`${clicked ? "clicked" : ""}`}>
          <ul>
            <li>
              <NavLink onClick={() => setClicked(false)} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setClicked(false)} to={"about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setClicked(false)} to={"courses"}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setClicked(false)} to={"blog"}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setClicked(false)} to={"contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <MenuIcon
          className={`menu menu-bar`}
          onClick={() => setClicked(true)}
          style={{ display: `${clicked ? "none" : "block"}` }}
        />
        <CloseIcon
          className={`menu exit`}
          onClick={() => setClicked(false)}
          style={{ display: `${clicked ? "block" : "none"}` }}
        />
      </div>
    </header>
  );
};

export default Header;
