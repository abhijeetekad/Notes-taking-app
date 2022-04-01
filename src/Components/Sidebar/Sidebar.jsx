import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="library-name">
        <h3>USER NAME</h3>
      </div>
      <div className="main-taks">
        <NavLink className="link" to="/main-page">
          <span>New Note</span>
        </NavLink>
        <NavLink className="link" to="/all-notes">
          <span>All Notes</span>
        </NavLink>

        <NavLink className="link" to="/pin-note">
          <span>Pinned Notes</span>
        </NavLink>

        <NavLink className="link" to="/recycle-bin">
          <span>Recycle Bin</span>
        </NavLink>
      </div>
    </div>
  );
}

export { Sidebar };
