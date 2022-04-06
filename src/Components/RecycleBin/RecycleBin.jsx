import React from "react";
import { useNote } from "../../Context/NoteContext";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import NoNotesImg from "../../Assets/NoNotes.png";
import "./RecycleBin.css";
function RecycleBin() {
  const { stateNoteData, dispatchNoteData } = useNote();
  return (
    <>
      {stateNoteData.recycle.length === 0 ? (
        <div className="noNotesImg">
          <h1>Recycle Bin...</h1>
          <img src={NoNotesImg} />
        </div>
      ) : (
        <div className="all-notes">
          {stateNoteData.recycle.map((item) => {
            return (
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="note-card"
              >
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
                <div className="card-labels">
                  <div className="priority">{item.selectedPriority}</div>
                  <div className="category">{item.selectedCategory}</div>
                </div>
                <div className="note-title">Title: {item.title}</div>
                <div className="note-descreption">
                  Descreption: {item.descreption}
                </div>
                <span
                  onClick={() =>
                    dispatchNoteData({
                      type: "RESTORE_NOTE",
                      payload: item,
                    })
                  }
                  className="restore-icon"
                >
                  <RestoreFromTrashIcon />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export { RecycleBin };
