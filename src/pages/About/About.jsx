import { PagesBackground, Footer, AboutContent } from "../../components";
import "./about.scss";
import { useEffect } from "react";
import { handleObserver } from "../../useObserver";

const About = () => {
  useEffect(() => {
    handleObserver();
  }, []);

  return (
    <div className="about">
      <PagesBackground title={"About Us"} />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
