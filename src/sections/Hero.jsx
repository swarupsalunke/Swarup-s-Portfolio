import heroImg from "../assets/images/hero.jpg";
import { FaHandPaper } from "react-icons/fa"; // import icon


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm Swarup{" "}
          <span className="wave">
            <FaHandPaper />
          </span>
        </h1>

        <h2>Full Stack MERN Developer</h2>

        <p>
          "I build fast, responsive, and real-world web apps using MERN stack."
          🚀 "Currently open for internships / full-time roles"
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a
            href="https://drive.google.com/file/d/1-LB0aLaWZh_kEcFRKgZe6noeixtnlpIq/view?usp=sharing"
            download
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Swarup developer illustration" />
      </div>
    </section>
  );
};

export default Hero;