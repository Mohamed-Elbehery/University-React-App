import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./aboutContent.scss";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className="about-container hidden">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 70 }}
        className="about-content"
      >
        <h2>We Are The World's Largest University</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
          pariatur maiores illo impedit id eos est natus, atque, modi
          repellendus molestias placeat, magnam quidem voluptatibus. Corrupti
          aspernatur suscipit explicabo facilis, non laborum eum assumenda odio?
          Fugit aspernatur odit cum, numquam ea quaerat natus facere!
        </p>
        <Link to={"/University-React-App/courses"}>Explore Now</Link>
      </motion.div>
      <div className="about-img">
        <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 70 }}
          loading="lazy"
          src={images?.about}
          alt="about-img"
        />
      </div>
    </div>
  );
};

export default AboutContent;
