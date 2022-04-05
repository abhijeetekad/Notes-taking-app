import React from "react";
import { Link, NavLink } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import "./Sidebar.css";
import { useTheme } from "../../Context/ThemeContext";
import LabelIcon from "@mui/icons-material/Label";
import { withTheme } from "styled-components";
import { useSidebar } from "../../Context/SidebarContext";

function Sidebar() {
  const { theme } = useTheme();
  const { showSidebar, sidebarToggler } = useSidebar();
  const getActiveLinkStatus = ({ isActive }) => {
    if (theme === "dark") {
      return {
        color: isActive ? "#74768F" : "#ffffff",
        textDecoration: "none",
      };
    } else {
      return {
        color: isActive ? "#74768F" : "black",
        textDecoration: "none",
      };
    }
  };
  return (
    <div>
      {showSidebar && (
        <div
          style={{ backgroundColor: theme === "light" ? "white" : "" }}
          className="sidebar"
        >
          <div className="library-name">
            <h4>USER NAME</h4>
          </div>
          <div className="main-taks">
            <NavLink style={getActiveLinkStatus} to="/main-page">
              <div className="sideBar-items">
                <NoteAltIcon />
                <span>New Note</span>
              </div>
            </NavLink>
            <NavLink style={getActiveLinkStatus} to="/all-notes">
              <div className="sideBar-items">
                <DescriptionIcon />
                <span>All Notes</span>
              </div>
            </NavLink>

            <NavLink style={getActiveLinkStatus} to="/archive">
              <div className="sideBar-items">
                <ArchiveIcon />
                <span>Archive Notes</span>
              </div>
            </NavLink>
            <NavLink style={getActiveLinkStatus} to="/label">
              <div className="sideBar-items">
                <LabelIcon />
                <span>Label</span>
              </div>
            </NavLink>

            <NavLink style={getActiveLinkStatus} to="/recycle-bin">
              <div className="sideBar-items">
                <DeleteSweepIcon />
                <span>Recycle Bin</span>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export { Sidebar };
// {showSidebar &&
