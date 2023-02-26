import { images } from "../../constants";

const FacilitiesContent = () => {
  return (
    <div className="facilities-content">
      <div className="facilities-cards">
        <div className="facilities-card hidden">
          <img loading="lazy" src={images?.library} alt="library-img" />
          <div className="card-content">
            <h3>World Class Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo soluta dolorum?
            </p>
          </div>
        </div>
        <div className="facilities-card hidden">
          <img loading="lazy" src={images?.cafeteria} alt="cafeteria-img" />
          <div className="card-content">
            <h3>Largest Play Ground</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo soluta dolorum?
            </p>
          </div>
        </div>
        <div className="facilities-card hidden">
          <img loading="lazy" src={images?.basketball} alt="basketball-img" />
          <div className="card-content">
            <h3>Tasty And Healthy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo soluta dolorum?
            </p>
          </div>
        </div>
        <div className="facilities-card hidden">
          <img loading="lazy" src={images?.library} alt="library-img" />
          <div className="card-content">
            <h3>World Class Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo soluta dolorum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesContent;
