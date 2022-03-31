import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../../Assets/undraw_Taking_notes_re_bnaf.png";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="landingPage">
        <div className="landingPage-main">
          <div className="landingImg">
            <img src={landingImg} />
          </div>
          <div>
            <p className="main-line">Think better. Achieve more.</p>
            <p className="about-line">
              This is a digital notebook that blends notes, tasks, and a daily
              planner into one streamlined app.
            </p>
            <Link to="/main-page">
              <button className="btn">Get Started</button>
            </Link>
            <p>Available on Mac, Windows, iPad, iPhone, and the web.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { LandingPage };
