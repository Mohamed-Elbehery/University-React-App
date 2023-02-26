import { PagesBackground, Footer, ContactContent, Header } from "../../components";
import "./contact.scss";

const Contact = () => {
  return (
    <div>
      <Header />
      <PagesBackground title={"Contact Us"} />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
