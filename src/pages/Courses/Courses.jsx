import {
  PagesBackground,
  Footer,
  CoursesCo,
  Facilities,
  Header,
} from "../../components";
import "./courses.scss";

const Courses = () => {
  return (
    <div className="courses-page">
      <Header />
      <PagesBackground title={"Our Courses"} />
      <CoursesCo />
      <Facilities />
      <Footer />
    </div>
  );
};

export default Courses;
