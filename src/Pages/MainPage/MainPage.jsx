import React from "react";
import "./MainPage.css";
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import { Sidebar } from "../../Components/Sidebar/Sidebar.jsx";
import { useSidebar } from "../../Context/SidebarContext";

function MainPage({ page }) {
  const { showSidebar } = useSidebar();
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar />

        <div
          style={{ marginLeft: !showSidebar ? "20px" : "" }}
          className="library-content"
        >
          <div className=".library-components">{page}</div>
        </div>
      </div>
    </div>
  );
}

export { MainPage };
