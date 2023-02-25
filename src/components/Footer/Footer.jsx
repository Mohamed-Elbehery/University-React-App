import "./footer.scss";
import MainHeading from "../MainHeading";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <MainHeading
        title={"About Us"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quisquam alias eaque ipsaquidem provident corporis sint dolor illum perferendis!"
        }
      />
      <div className="social-media">
        <Link to={"/"}>
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link to={"/"}>
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to={"https://www.linkedin.com/in/mohamed-el-behery-b0b367265/"}>
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link to={"https://github.com/Mohamed-Elbehery"}>
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
      <h4>
        Made With <i className="fa-regular fa-heart"></i> by Mohamed El-Behery
      </h4>
    </footer>
  );
};

export default Footer;
