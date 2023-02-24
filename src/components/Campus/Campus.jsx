import MainHeading from "../MainHeading";
import CampusContent from "./CampusContent";
import "./campus.scss";

const Campus = () => {
  return (
    <div className="campus">
      <MainHeading
        title={"Our Global Campus"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />
      <CampusContent />
    </div>
  );
};

export default Campus;
