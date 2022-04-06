import React from "react";
import { useNote } from "../../Context/NoteContext";

const Label = () => {
  const { stateNoteData, dispatchNoteData, newArrLabel, priority } = useNote();
  console.log("2", stateNoteData);
  return (
    <div>
      <div>
        {newArrLabel.map((item) => (
          <button>{item}</button>
        ))}
      </div>
      <div>
        {priority.map((item) => (
          <button
            onClick={() =>
              dispatchNoteData({
                type: "PRIOROTY_FILTER",
                payload: stateNoteData,
              })
            }
          >
            {item}
          </button>
        ))}
      </div>
      {/* <div>{stateNoteData}</div> */}
    </div>
  );
};

export { Label };
