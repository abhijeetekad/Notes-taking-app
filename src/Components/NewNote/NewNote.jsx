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
  const [showPalette, setShowPallete] = useState(false);
  const paletteModel = () => {
    setShowPallete(!showPalette);
  };

  const {
    stateNoteData,
    dispatchNoteData,
    priority,
    newArrLabel,
    addCategoryBtn,
    newCategory,
    setNewCategory,
  } = useNote();
  const d = new Date();
  let date = d.getDate();
  let day = d.getDay();
  let year = d.getFullYear();

  const [isExtended, setExtended] = useState(false);
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    descreption: "",
    id: uuidv4(),
    selectedCategory: "School",
    color: "",
    showColorPalette: false,
    selectedPriority: "Low",
    date: `${date}/${day}/${year}`,
  });

  const noteSubmitHandler = (e) => {
    e.preventDefault();
    setNoteInfo({
      title: "",
      descreption: "",
      id: uuidv4(),
      selectedCategory: "School",
      selectedPriority: "Low",
      color: "",
    });
    dispatchNoteData(
      { type: "NEW_NOTE", payload: noteInfo },
      { type: "ALL_DATA", payload: noteInfo }
    );
  };
  const titleChangeHandler = (e) => {
    setNoteInfo({
      ...noteInfo,
      title: e.target.value,
    });
  };
  const descreptionChangeHandler = (e) => {
    setNoteInfo({
      ...noteInfo,
      descreption: e.target.value,
    });
  };

  const newLabelHandler = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={noteSubmitHandler}>
          <div className="form-catageory">
            <input
              className="input-title"
              onClick={() => setExtended(true)}
              name="title"
              value={noteInfo.title}
              placeholder="Title"
              onChange={titleChangeHandler}
            />
          </div>

          {isExtended && (
            <div className="form-catageory">
              <input
                name="description"
                value={noteInfo.descreption}
                className="form-input"
                placeholder="Take a Note"
                onChange={descreptionChangeHandler}
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
            <select
              required
              className="form-details"
              onChange={(e) =>
                setNoteInfo({ ...noteInfo, selectedPriority: e.target.value })
              }
            >
              {priority.map((item) => (
                <option required value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              required
              className="form-details"
              onChange={(e) =>
                setNoteInfo({ ...noteInfo, selectedCategory: e.target.value })
              }
            >
              {newArrLabel.map((item) => (
                <option required value={item}>
                  {item}
                </option>
              ))}
            </select>

            <input
              className="form-details"
              type="text"
              value={newCategory}
              onChange={newLabelHandler}
              placeholder="Create new label"
            />
            <button className="categoryBtn" onClick={addCategoryBtn}>
              Add new label
            </button>
            <div className="ColorLensIcon">
              <span
                style={{ color: "black" }}
                onClick={() => paletteModel((showPalette) => !showPalette)}
              >
                <ColorLensIcon />
              </span>
              <div className="palette">
                {showPalette && (
                  <div className="colorPalette">
                    <button
                      onClick={() =>
                        setNoteInfo({
                          ...noteInfo,
                          color: "#ecdbff",
                        })
                      }
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ecdbff" }}
                    ></button>
                    <button
                      onClick={() =>
                        setNoteInfo({
                          ...noteInfo,
                          color: "#dcffe3",
                        })
                      }
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#dcffe3" }}
                    ></button>
                    <button
                      onClick={() =>
                        setNoteInfo({
                          ...noteInfo,
                          color: "#d9f2ff",
                        })
                      }
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#d9f2ff" }}
                    ></button>
                    <button
                      onClick={() =>
                        setNoteInfo({
                          ...noteInfo,
                          color: "#ffffd8",
                        })
                      }
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ffffd8" }}
                    ></button>
                    <button
                      onClick={() =>
                        setNoteInfo({
                          ...noteInfo,
                          color: "#ffd9fa",
                        })
                      }
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ffd9fa" }}
                    ></button>
                    <button
                      onClick={() =>
                        setNoteInfo({
                          ...noteInfo,
                          color: "#ffffff",
                        })
                      }
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ffffff" }}
                    ></button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <FilterNotes /> */}
      <PinnedNotes />
      <h2>All Notes :</h2>
      <div className="all-notes">
        {stateNoteData.note.map((item) => {
          return (
            <div>
              <div
                className="note-card"
                style={{ backgroundColor: `${item.color}` }}
              >
                <span className="delete-icon">
                  <div
                    style={{ color: "White" }}
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
                <div className="card-labels">
                  <div className="priority">{item.selectedPriority}</div>
                  <div className="category">{item.selectedCategory}</div>
                </div>

                <h4 className="note-title"> {item.title}</h4>
                <p className="note-descreption">{item.descreption}</p>

                <div className="note-footer">
                  <p>Date: {item.date}</p>
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
