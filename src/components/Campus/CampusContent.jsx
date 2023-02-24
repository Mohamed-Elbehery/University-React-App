import { images } from "../../constants";

const CampusContent = () => {
  return (
    <div className="campus-content">
      <div className="campus-cards">
        <div className="campus-card hidden">
          <img src={images?.london} alt="london-img" />
          <div className="card-title">
            <h3>London</h3>
          </div>
        </div>
        <div className="campus-card hidden">
          <img src={images?.newyork} alt="newyork-img" />
          <div className="card-title">
            <h3>New York</h3>
          </div>
        </div>
        <div className="campus-card hidden">
          <img src={images?.washington} alt="washington-img" />
          <div className="card-title">
            <h3>Washington</h3>
          </div>
        </div>
        <div className="campus-card hidden">
          <img src={images?.newyork} alt="newyork-img" />
          <div className="card-title">
            <h3>New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusContent;
