import { PagesBackground, Footer, ContactContent } from "../../components";
import "./contact.scss";
import { useEffect } from "react";
import { handleObserver } from "../../useObserver";

const Contact = () => {
  useEffect(() => {
    handleObserver();
  }, []);

  return (
    <div>
      <PagesBackground title={"Contact Us"} />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
