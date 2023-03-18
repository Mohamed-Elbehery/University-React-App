import {
  PagesBackground,
  Footer,
  AboutContent,
  Header,
} from "../../components";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <Header />
      <PagesBackground title={"About Us"} />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
