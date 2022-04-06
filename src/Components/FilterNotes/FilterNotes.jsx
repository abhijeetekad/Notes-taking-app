import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useNote } from "../../Context/NoteContext";
function FilterNotes() {
  const { stateNoteData, dispatchNoteData } = useNote();

  return (
    <div>
      <FilterAltIcon />
      <div>
        <button
          onClick={(e) => dispatchNoteData({ type: "LOW_PRIORITY_FILTER" })}
        >
          Add filter
        </button>
        <button>Clear button</button>
      </div>
    </div>
  );
}

export { FilterNotes };
