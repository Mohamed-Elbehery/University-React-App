import { BeatLoader } from "react-spinners";
import "./lazyLoad.scss";

const LazyLoad = () => {
  return (
    <BeatLoader
      className="lazy-container"
      color={"#f44336"}
      loading={true}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LazyLoad;
