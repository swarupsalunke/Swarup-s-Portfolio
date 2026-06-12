import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman, SiNetlify, SiVercel, SiRender } from "react-icons/si";

const Skills = () => {
  const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    padding: "1.5rem",
    backdropFilter: "blur(18px)",
  };

  const categories = [
    {
      title: "Frontend",
      icons: [
        { icon: <FaHtml5 style={{ color: "#e34f26" }} />, label: "HTML" },
        { icon: <FaCss3Alt style={{ color: "#1572b6" }} />, label: "CSS" },
        { icon: <FaBootstrap style={{ color: "#7952b3" }} />, label: "Bootstrap" },
        { icon: <SiJavascript style={{ color: "#f7df1e" }} />, label: "JavaScript" },
        { icon: <FaReact style={{ color: "#61dafb" }} />, label: "React" },
      ],
    },
    {
      title: "Backend",
      icons: [
        { icon: <FaNodeJs style={{ color: "#68a063" }} />, label: "Node.js" },
        { icon: <SiExpress style={{ color: "var(--text)" }} />, label: "Express" },
      ],
    },
    {
      title: "Database",
      icons: [
        { icon: <SiMongodb style={{ color: "#47a248" }} />, label: "MongoDB" },
        { icon: <SiMysql style={{ color: "#00758f" }} />, label: "MySQL" },
      ],
    },
    {
      title: "Tools",
      icons: [
        { icon: <FaGitAlt style={{ color: "#f05032" }} />, label: "Git" },
        { icon: <SiPostman style={{ color: "#ff6c37" }} />, label: "Postman" },
        { icon: <SiNetlify style={{ color: "#00c7b7" }} />, label: "Netlify" },
        { icon: <SiVercel style={{ color: "var(--text)" }} />, label: "Vercel" },
        { icon: <SiRender style={{ color: "#46e3b7" }} />, label: "Render" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "2rem",
        }}
      >
        {categories.map((cat) => (
          <div key={cat.title} style={cardStyle}>
            <h3
              style={{
                margin: "0 0 1.25rem",
                fontSize: "15px",
                fontWeight: "500",
                letterSpacing: "0.5px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "0.75rem",
                color: "var(--text)",
              }}
            >
              {cat.title}
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {cat.icons.map((item) => (
                <div
                  key={item.label}
                  className="skill-icon-box"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    minWidth: "60px",
                    transition: "background 0.2s",
                    cursor: "default",
                  }}
                >
                  <span style={{ fontSize: "28px", lineHeight: 1 }}>{item.icon}</span>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;