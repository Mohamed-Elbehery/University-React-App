import "./facilities.scss";
import MainHeading from "../MainHeading";
import FacilitiesContent from "./FacilitiesContent";

const Facilities = () => {
  return (
    <div className="facilities">
      <MainHeading
        title={"Facilities"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />
      <FacilitiesContent />
    </div>
  );
};

export default Facilities;
