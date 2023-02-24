import "./header.scss";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"courses"}>Courses</NavLink>
            </li>
            <li>
              <NavLink to={"blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
