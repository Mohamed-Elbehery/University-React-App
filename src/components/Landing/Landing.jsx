import "./landing.scss";
import { images } from "../../constants/";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="landing">
      <img
        loading="lazy"
        src={images?.universityBackground}
        alt="landing-background"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.75, type: "spring", stiffness: 150 }}
        className="landing-content"
      >
        <h1>World's Biggest University</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          adipisci saepe corrupti fuga doloremque molestias natus. A!
        </p>
        <Link to={"/blog"}>Visit Us To Know More</Link>
      </motion.div>
    </div>
  );
};

export default Landing;
