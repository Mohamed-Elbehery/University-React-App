import "./home.scss";
import {
  CoursesCo,
  Landing,
  Campus,
  Facilities,
  Testimonials,
  Enroll,
  Footer,
  Header,
} from "../../components";
import { useEffect } from "react";
import { handleObserver } from "../../useObserver";

const Home = () => {
  useEffect(() => {
    handleObserver();
  }, []);

  return (
    <div>
      <Header />
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
