import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNote } from "../../Context/NoteContext";
import "./NewNote.css";
function NewNote() {
  const { stateNoteData, dispatchNoteData } = useNote();

  const [noteInfo, setNoteInfo] = useState({
    title: "",
    descreption: "",
    id: "",
  });

  return (
    <div className="formContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNoteInfo({
            title: "",
            descreption: "",
            id: "",
          });
          dispatchNoteData({ type: "NEW_NOTE", payload: noteInfo });
        }}
      >
        <div className="form-catageory">
          <div className="form-details">
            <label>Note Title : </label>
          </div>

          <input
            className="input-title"
            name="title"
            value={noteInfo.title}
            placeholder="Title"
            onChange={(e) =>
              setNoteInfo({
                ...noteInfo,
                title: e.target.value,
                id: uuidv4(),
              })
            }
          />
        </div>
        <div className="form-catageory">
          <div className="form-details">
            <label>Write Note :</label>
          </div>

          <input
            name="description"
            value={noteInfo.descreption}
            className="form-input"
            placeholder="Take a Note"
            onChange={(e) =>
              setNoteInfo({
                ...noteInfo,
                descreption: e.target.value,
                id: uuidv4(),
              })
            }
          />
        </div>
        <div className="form-btn">
          <button className="formBtn" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}

export { NewNote };
