import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./enroll.scss";

const Enroll = () => {
  return (
    <div className="enroll">
      <div className="enroll-img">
        <img loading="lazy" src={images?.banner2} alt="banner-img" />
      </div>
      <div className="enroll-content">
        <h2>Enroll For Our Various Online Courses Anywhere From The World</h2>
        <Link to={"/University-React-App/contact"}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Enroll;
