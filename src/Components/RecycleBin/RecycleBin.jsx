import React from "react";
import { useNote } from "../../Context/NoteContext";
import DeleteIcon from "@mui/icons-material/Delete";

function RecycleBin() {
  const { stateNoteData, dispatchNoteData } = useNote();
  return (
    <div className="all-notes">
      {stateNoteData.recycle.map((item) => {
        return (
          <div className="note-card">
            <span
              onClick={() =>
                dispatchNoteData({
                  type: "DELETE_NOTE",
                  payload: item.id,
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

export { RecycleBin };
