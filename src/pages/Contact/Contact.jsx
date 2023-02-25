import { PagesBackground, Footer, ContactContent } from "../../components";
import "./contact.scss";

const Contact = () => {
  return (
    <div>
      <PagesBackground title={"Contact Us"} />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
