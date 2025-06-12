import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for theme preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert string to boolean
  });

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Toggle the dark class on the body
    document.body.classList.toggle("dark", newDarkMode);
    // Save the new theme preference in local storage
    localStorage.setItem("darkMode", newDarkMode);
  };

  // Sync state if user prefers dark mode on load
  useEffect(() => {
    // Apply the dark class based on the darkMode state
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]); // run when darkMode changes

  return (
    <header className="header">
      <nav
        className="nav-container"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="nav-logo">
          <img
            src="./images/logo.png"
            alt="Azuul Motors logo"
            className="logo"
          />
          <h1 className="brand-heading">Azuul Motors</h1>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <ul className={`nav-list ${menuOpen ? "show" : ""}`}>
          <li className="nav-item" tabIndex="0">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item" tabIndex="0">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item" tabIndex="0">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item" tabIndex="0">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Light Mode" : "Dark Mode"}
          className="theme-toggle-btn"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
};
