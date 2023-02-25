import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./aboutContent.scss";

const AboutContent = () => {
  return (
    <div className="about-container hidden">
      <div className="about-content">
        <h2>We Are The World's Largest University</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
          pariatur maiores illo impedit id eos est natus, atque, modi
          repellendus molestias placeat, magnam quidem voluptatibus. Corrupti
          aspernatur suscipit explicabo facilis, non laborum eum assumenda odio?
          Fugit aspernatur odit cum, numquam ea quaerat natus facere!
        </p>
        <Link to={"/courses"}>Explore Now</Link>
      </div>
      <div className="about-img">
        <img src={images?.about} alt="about-img" />
      </div>
    </div>
  );
};

export default AboutContent;
