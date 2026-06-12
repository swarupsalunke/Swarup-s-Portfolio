import contactVideo from "../assets/7020014_Desk_Typing_3840x2160.mp4";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone  } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">

      {/* Video added here */}
      <div className="contact-video">
        <video src={contactVideo} autoPlay loop muted />
      </div>

      <h2>Contact Me</h2>

      <p>
        I’m currently open to internship and full-time opportunities.  
        Feel free to reach out!
      </p>

      <div className="contact-info">
        <a href="mailto:swarupsalunke01@gmail.com">
          <FaEnvelope /> swarupsalunke01@gmail.com
        </a>

         <a href="tel:+919529624837">
          <FaPhone /> +91 9529624837
        </a>

        <a
          href="https://github.com/swarupsalunke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/swarup-salunke-9a8309341/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;