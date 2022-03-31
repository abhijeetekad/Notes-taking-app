import React from "react";
import "./MainPage.css";
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import { Footer } from "../../Components/Footer/Footer.jsx";
import { Sidebar } from "../../Components/Sidebar/Sidebar.jsx";
// import { NewNote } from "../../Components/NewNote/NewNote.jsx";

function MainPage({ page }) {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <div className="library-content">
          <div className=".library-components">{page}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { MainPage };
