import React, { useState } from "react";

function ColorPalette() {
  const [showPalette, setShowPallete] = useState(false);
  const paletteModel = () => {
    setShowPallete(!showPalette);
  };
  return (
    <div>
      {showPalette && (
        <div className="colorPalette">
          <button
            onClick={() =>
              setNoteInfo({
                ...noteInfo,
                color: "grey",
              })
            }
            className="colorPaletteBtn"
            style={{ backgroundColor: "grey" }}
          ></button>
          <button
            onClick={() =>
              setNoteInfo({
                ...noteInfo,
                color: "green",
              })
            }
            className="colorPaletteBtn"
            style={{ backgroundColor: "green" }}
          ></button>
          <button
            onClick={() =>
              setNoteInfo({
                ...noteInfo,
                color: "tomato",
              })
            }
            className="colorPaletteBtn"
            style={{ backgroundColor: "tomato" }}
          ></button>
          <button
            onClick={() =>
              setNoteInfo({
                ...noteInfo,
                color: "yellow",
              })
            }
            className="colorPaletteBtn"
            style={{ backgroundColor: "yellow" }}
          ></button>
          <button
            onClick={() =>
              setNoteInfo({
                ...noteInfo,
                color: "red",
              })
            }
            className="colorPaletteBtn"
            style={{ backgroundColor: "red" }}
          ></button>
          <button
            onClick={() =>
              setNoteInfo({
                ...noteInfo,
                color: "brown",
              })
            }
            className="colorPaletteBtn"
            style={{ backgroundColor: "brown" }}
          ></button>
        </div>
      )}
    </div>
  );
}

export { ColorPalette };
