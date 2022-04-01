import React from "react";
import { useNote } from "../../Context/NoteContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./NoteCard.css";
function NoteCard({ noteInfo }) {
  const { dispatchNoteData } = useNote();

  return (
    <div className="note-card">
      <span
        onClick={() =>
          dispatchNoteData({
            type: "MOVE_TO_RECYCLE_BIN",
            payload: noteInfo,
          })
        }
        className="delete-icon"
      >
        <DeleteIcon />
      </span>

      <div className="note-title">Title: {noteInfo.title}</div>
      <div className="note-descreption">
        Descreption: {noteInfo.descreption}
      </div>
    </div>
  );
}

export { NoteCard };
