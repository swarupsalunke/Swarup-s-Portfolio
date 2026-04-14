import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman, SiNetlify } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="icons">
            <div className="icon-box"><FaHtml5 /><span>HTML</span></div>
            <div className="icon-box"><FaCss3Alt /><span>CSS</span></div>
            <div className="icon-box"><FaBootstrap /><span>Bootstrap</span></div>
            <div className="icon-box"><SiJavascript /><span>JavaScript</span></div>
            <div className="icon-box"><FaReact /><span>React</span></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="icons">
            <div className="icon-box"><FaNodeJs /><span>Node.js</span></div>
            <div className="icon-box"><SiExpress /><span>Express</span></div>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>Database</h3>
          <div className="icons">
            <div className="icon-box"><SiMongodb /><span>MongoDB</span></div>
            <div className="icon-box"><SiMysql /><span>MySQL</span></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="icons">
            <div className="icon-box"><FaGitAlt /><span>Git</span></div>
            <div className="icon-box"><SiPostman /><span>Postman</span></div>
            <div className="icon-box"><SiNetlify /><span>Netlify</span></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;