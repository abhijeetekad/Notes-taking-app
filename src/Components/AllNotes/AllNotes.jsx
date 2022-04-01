import React from "react";

import "./AllNotes.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNote } from "../../Context/NoteContext";

function AllNotes() {
  const { stateNoteData, dispatchNoteData } = useNote();

  return (
    <div className="all-notes">
      {stateNoteData.note.map((item) => {
        return (
          <div className="note-card">
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

            <div className="note-title">Title: {item.title}</div>
            <div className="note-descreption">
              Descreption: {item.descreption}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { AllNotes };
