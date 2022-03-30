import React from "react";
import "./MyRoutes.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import MockmanEs from "mockman-js";

function MyRoutes() {
  return (
    <div className="main">
      {" "}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export { MyRoutes };
