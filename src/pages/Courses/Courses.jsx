import {
  PagesBackground,
  Footer,
  CoursesCo,
  Facilities,
  Header,
} from "../../components";
import "./courses.scss";
import { useEffect } from "react";
import { handleObserver } from "../../useObserver";

const Courses = () => {
  useEffect(() => {
    handleObserver();
  }, []);

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
