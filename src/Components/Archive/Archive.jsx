import React from "react";
import { useNote } from "../../Context/NoteContext";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import NoNotesImg from "../../Assets/NoNotes.png";
import "./Archive.css";
function Archive() {
  const { stateNoteData, dispatchNoteData } = useNote();

  return (
    <>
      {stateNoteData.archive.length === 0 ? (
        <div className="noNotesImg">
          <h1>Archive Notes...</h1>
          <img src={NoNotesImg} />
        </div>
      ) : (
        <div className="all-notes">
          {stateNoteData.archive.map((item) => {
            return (
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="note-card"
              >
                <div className="card-labels">
                  <div className="priority">{item.selectedPriority}</div>
                  <div className="category">{item.selectedCategory}</div>
                </div>
                <div className="note-title"> {item.title}</div>
                <div className="note-descreption">{item.descreption}</div>
                <div className="note-footer">
                  <span
                    onClick={() =>
                      dispatchNoteData({
                        type: "UNARCHIVE",
                        payload: item,
                      })
                    }
                    className="delete-icon"
                  >
                    <UnarchiveIcon />
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

export { Archive };
