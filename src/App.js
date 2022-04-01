import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NewNote } from "./Components/NewNote/NewNote";

import { MainPage } from "./Pages/MainPage/MainPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";

import { PinNote } from "./Components/PinNote/PinNote.jsx";

import { AllNotes } from "./Components/AllNotes/AllNotes.jsx";

import { RecycleBin } from "./Components/RecycleBin/RecycleBin.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main-page" element={<MainPage page={<NewNote />} />} />
        <Route path="pin-note" element={<MainPage page={<PinNote />} />} />

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
