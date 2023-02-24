import MainHeading from "../MainHeading";
import CoursesContent from "./CoursesContent";
import "./courses.scss";

const Courses = () => {
  return (
    <div className="courses">
      <MainHeading
        title={"Courses We Offer"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />
      <CoursesContent />
    </div>
  );
};

export default Courses;
