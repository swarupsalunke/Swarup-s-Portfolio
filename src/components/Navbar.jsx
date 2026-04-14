import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineDarkMode, MdPerson, MdWork, MdEmail } from "react-icons/md";
import { FaTools, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Swarup</h2>

      <ul className="nav-links">
        <li>
          <a href="#about">
            <MdPerson /> About
          </a>
        </li>

        <li>
          <a href="#skills">
            <FaTools /> Skills
          </a>
        </li>

        <li>
          <a href="#experience">
            <MdWork /> Experience
          </a>
        </li>

        <li>
          <a href="#projects">
            <FaProjectDiagram /> Projects
          </a>
        </li>

        <li>
          <a href="#contact">
            <MdEmail /> Contact
          </a>
        </li>
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <MdLightMode size={22} />
        ) : (
          <MdOutlineDarkMode size={22} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
