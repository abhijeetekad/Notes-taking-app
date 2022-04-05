import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../src/Context/ThemeContext.jsx";
import { NoteProvider } from "./Context/NoteContext";
import { SideBarProvider } from "./Context/SidebarContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <SideBarProvider>
      <NoteProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </NoteProvider>
    </SideBarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
