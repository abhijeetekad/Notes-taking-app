import React from "react";
import "./AllNotes.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNote } from "../../Context/NoteContext";
import PushPinIcon from "@mui/icons-material/PushPin";
import NoNotesImg from "../../Assets/NoNotes.png";
import ColorLensIcon from "@mui/icons-material/ColorLens";

function AllNotes() {
  const { stateNoteData, dispatchNoteData } = useNote();

  return (
    <>
      {stateNoteData.note.length === 0 ? (
        <div className="noNotesImg">
          <h1>Write Notes...</h1>
          <img src={NoNotesImg} />
        </div>
      ) : (
        <div className="all-notes">
          {stateNoteData.note.map((item) => {
            return (
              <div className="note-card">
                <span
                  onClick={() =>
                    dispatchNoteData({
                      type: "PIN_NOTE",
                      payload: item,
                    })
                  }
                  className="delete-icon"
                >
                  <PushPinIcon />
                </span>

                <div className="category">{item.selectedCategory}</div>
                <div className="note-title"> {item.title}</div>
                <div className="note-descreption">{item.descreption}</div>
                <div className="note-footer">
                  <ColorLensIcon />
                  <span
                    onClick={() =>
                      dispatchNoteData({
                        type: "MOVE_TO_RECYCLE_BIN",
                        payload: item,
                      })
                    }
                    className="delete-icon"
                  >
                    <DeleteIcon />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export { AllNotes };
