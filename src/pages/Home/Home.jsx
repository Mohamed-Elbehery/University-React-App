import "./home.scss";
import {
  CoursesCo,
  Landing,
  Campus,
  Facilities,
  Testimonials,
  Enroll,
  Footer,
} from "../../components";
import { useEffect } from "react";
import { handleObserver } from "../../useObserver";

const Home = () => {
  useEffect(() => {
    handleObserver();
  }, []);

  return (
    <div>
      <Landing />
      <CoursesCo />
      <Campus />
      <Facilities />
      <Testimonials />
      <Enroll />
      <Footer />
    </div>
  );
};

export default Home;
