import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NewNote } from "./Components/NewNote/NewNote";

import { MainPage } from "./Pages/MainPage/MainPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";

import { AllNotes } from "./Components/AllNotes/AllNotes.jsx";

import { RecycleBin } from "./Components/RecycleBin/RecycleBin.jsx";
import MockmanEs from "mockman-js";
import { Archive } from "./Components/Archive/Archive.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
        <Route path="/main-page" element={<MainPage page={<NewNote />} />} />
        <Route path="archive" element={<MainPage page={<Archive />} />} />

        <Route path="/all-notes" element={<MainPage page={<AllNotes />} />} />

        <Route
          path="/recycle-bin"
          element={<MainPage page={<RecycleBin />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
