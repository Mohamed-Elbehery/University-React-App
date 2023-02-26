import MainHeading from "../MainHeading";
import TestimonialsContent from "./TestimonialsContent";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <MainHeading
        title={"What Our Students Says"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />
      <TestimonialsContent />
    </div>
  );
};

export default Testimonials;
