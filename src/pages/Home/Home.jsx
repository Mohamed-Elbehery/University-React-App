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

const Home = () => {
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
