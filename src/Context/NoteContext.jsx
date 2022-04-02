import { createContext, useContext, useReducer, useState } from "react";

const NoteContext = createContext();

const noteFun = (state, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return { ...state, note: [...state.note, { ...action.payload }] };
    case "MOVE_TO_RECYCLE_BIN":
      return {
        ...state,
        recycle: [...state.recycle, { ...action.payload }],
        note: state.note.filter((item) => item.id !== action.payload.id),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        recycle: state.recycle.filter((item) => item.id !== action.payload),
      };
  }
};

const NoteProvider = ({ children }) => {
  const inititalValue = {
    note: [],
    recycle: [],
  };
  const [stateNoteData, dispatchNoteData] = useReducer(noteFun, inititalValue);

  return (
    <NoteContext.Provider value={{ stateNoteData, dispatchNoteData }}>
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };
