import React from "react";
import { useNote } from "../../Context/NoteContext";

import { v4 as uuidv4 } from "uuid";

import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";

import ArchiveIcon from "@mui/icons-material/Archive";
import ColorLensIcon from "@mui/icons-material/ColorLens";
function PinnedNotes() {
  const { stateNoteData, dispatchNoteData } = useNote();
  return (
    <div>
      {stateNoteData.pinNote.length !== 0 && (
        <>
          <h2>Pinned Notes : </h2>
          <div className="all-notes">
            {stateNoteData.pinNote.map((item) => {
              return (
                <>
                  {stateNoteData.pinNote.length !== 0 && (
                    <div>
                      <div
                        style={{ backgroundColor: `${item.color}` }}
                        className="note-card"
                      >
                        <span className="delete-icon">
                          <div
                            onClick={() =>
                              dispatchNoteData({
                                type: "UN_PIN_NOTE",
                                payload: item,
                              })
                            }
                          >
                            <PushPinIcon />
                          </div>
                        </span>

                        <div className="category">{item.selectedCategory}</div>
                        <h4 className="note-title"> {item.title}</h4>
                        <p className="note-descreption">{item.descreption}</p>
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
                          <span
                            onClick={() =>
                              dispatchNoteData({
                                type: "MOVE_TO_ARCHIVE",
                                payload: item,
                              })
                            }
                            className="archive-icon"
                          >
                            <ArchiveIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export { PinnedNotes };
