import { Link } from "react-router-dom";
import "./contactContent.scss";

const ContactContent = () => {
  return (
    <div className="contact-container">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.835321129478!2d31.312940914464363!3d30.098902322954252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458167b563bfaf7%3A0x6193edd79b1e8101!2sGesr%20Al%20Suez%2C%20El-Montaza%2C%20Heliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1660276574784!5m2!1sen!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="contact map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-form">
        <div className="form-icons">
          <div className="address">
            <h4>Gesr Al Suez</h4>
            <p>El-Montazah, Heliopolis, Cairo Governorate</p>
          </div>
          <div className="phone-number">
            <h4>+201021141193</h4>
            <p>Saturday To Thursday, 8AM To 6PM</p>
          </div>
          <div className="email">
            <h4>dev.elbehery@gmail.com</h4>
            <p>Email Us Your Query</p>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Enter Your Name..." />
          <input type="email" placeholder="Enter Your Email Address..." />
          <input type="text" placeholder="Enter Your Subject..." />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
          <Link to={"/contact"}>Send Message</Link>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
