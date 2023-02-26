import "./pagesBackground.scss";
import { images } from "../../constants";

const PagesBackground = ({ title }) => {
  return (
    <div className="background-img">
      <img loading="lazy" src={images?.background} alt="graduation-img" />
      <div className="background-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default PagesBackground;
