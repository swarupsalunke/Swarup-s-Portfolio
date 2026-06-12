import { useEffect, useState } from "react";
import {
  MdLightMode,
  MdOutlineDarkMode,
  MdPerson,
  MdWork,
  MdEmail,
} from "react-icons/md";
import { FaTools, FaProjectDiagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Swarup</h2>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={closeMenu}>
            <MdPerson /> About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            <FaTools /> Skills
          </a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>
            <MdWork /> Experience
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            <FaProjectDiagram /> Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            <MdEmail /> Contact
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
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