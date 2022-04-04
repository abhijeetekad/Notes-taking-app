import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNote } from "../../Context/NoteContext";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import "./NewNote.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { PinnedNotes } from "../PinnedNotes/PinnedNotes";

function NewNote() {
  const { stateNoteData, dispatchNoteData } = useNote();
  const [newCategory, setNewCategory] = useState();
  const [isExtended, setExtended] = useState(false);
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    descreption: "",
    id: "",
    selectedCategory: "School",
  });

  const arr = ["School", "Home", "Office"];
  const [newArr, setNewArr] = useState(arr);
  const addCategoryBtn = () => {
    setNewArr(newArr.concat(newCategory));
    setNewCategory("");
  };

  return (
    <>
      <div className="formContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNoteInfo({
              title: "",
              descreption: "",
              id: uuidv4(),
              selectedCategory: "School",
            });
            dispatchNoteData({ type: "NEW_NOTE", payload: noteInfo });
          }}
        >
          <div className="form-catageory">
            <input
              className="input-title"
              onClick={() => setExtended(true)}
              name="title"
              value={noteInfo.title}
              placeholder="Title"
              onChange={(e) =>
                setNoteInfo({
                  ...noteInfo,
                  title: e.target.value,
                  // id: uuidv4(),
                })
              }
            />
          </div>

          {isExtended && (
            <div className="form-catageory">
              <input
                name="description"
                value={noteInfo.descreption}
                className="form-input"
                placeholder="Take a Note"
                onChange={(e) =>
                  setNoteInfo({
                    ...noteInfo,
                    descreption: e.target.value,
                    // id: uuidv4(),
                  })
                }
              />
            </div>
          )}

          {isExtended && (
            <div className="form-btn">
              <button className="formBtn" onClick={() => setExtended(false)}>
                Close
              </button>
              <button className="formBtn" type="submit">
                Add Note
              </button>
            </div>
          )}
        </form>

        {isExtended && (
          <div className="form-label">
            <form>
              <select
                required
                className="form-details"
                onChange={(e) =>
                  setNoteInfo({ ...noteInfo, selectedCategory: e.target.value })
                }
              >
                {newArr.map((item) => (
                  <option required value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </form>
            <input
              className="form-details"
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Create new label"
            />
            <button className="categoryBtn" onClick={addCategoryBtn}>
              Add new label
            </button>
          </div>
        )}
      </div>
      <PinnedNotes />
      <h2>All Notes :</h2>
      <div className="all-notes">
        {stateNoteData.note.map((item) => {
          return (
            <div>
              <div className="note-card">
                <span className="delete-icon">
                  <div
                    onClick={() =>
                      dispatchNoteData({
                        type: "PIN_NOTE",
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
          );
        })}
      </div>
    </>
  );
}

export { NewNote };
