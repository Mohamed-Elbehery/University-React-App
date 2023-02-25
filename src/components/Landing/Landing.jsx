import "./landing.scss";
import { images } from "../../constants/";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <img src={images?.banner} alt="landing-background" />
      <div className="landing-content hidden">
        <h1>World's Biggest University</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          adipisci saepe corrupti fuga doloremque molestias natus. A!
        </p>
        <Link to={"/University-React-App/blog"}>Visit Us To Know More</Link>
      </div>
    </div>
  );
};

export default Landing;
