import React from "react";
import "./Navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../Context/ThemeContext.jsx";
function Navbar() {
  const { theme, themeToggle } = useTheme();
  return (
    <div>
      <div className="navbar">
        <div className="nav-header">
          <div className="nav-logo">
            <label for="checkbox1">
              <i className="fas fa-bars fa-2x"></i>
            </label>
            <p>Notes App</p>
          </div>
          <div className="nav-icon">
            <div className="sc-nav-options">
              <button onClick={themeToggle}>
                {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </button>
            </div>
            <div className="sc-nav-options">
              <p>Log in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
