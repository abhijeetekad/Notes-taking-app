import React, { useState } from "react";
import "./Navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../Context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "../../Context/SidebarContext";

function Navbar() {
  const { theme, themeToggle } = useTheme();
  const { showSidebar, sidebarToggler } = useSidebar();
  return (
    <div
      style={{ backgroundColor: theme === "light" ? "white" : "" }}
      className="navbar"
    >
      <div className="nav-header">
        <div className="nav-logo">
          <label onClick={() => sidebarToggler((showSidebar) => !showSidebar)}>
            <MenuIcon />
          </label>

          <Link className="link" to="/">
            <p>Notes App</p>
          </Link>
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
  );
}

export { Navbar };
