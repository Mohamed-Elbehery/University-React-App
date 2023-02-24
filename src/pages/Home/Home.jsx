import "./home.scss";
import { Courses, Landing, Campus, Facilities } from "../../components";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add("show")
          : entry.target.classList.remove("show");
      });
    });
    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <Landing />
      <Courses />
      <Campus />
      <Facilities />
    </div>
  );
};

export default Home;
