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
        pinNote: state.pinNote.filter((item) => item.id !== action.payload.id),
      };
    case "MOVE_TO_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          {
            ...action.payload,
          },
        ],
        note: state.note.filter((item) => item.id !== action.payload.id),
        pinNote: state.pinNote.filter((item) => item.id !== action.payload.id),
      };
    case "PIN_NOTE":
      return {
        ...state,
        pinNote: [
          ...state.pinNote,
          {
            ...action.payload,
          },
        ],
        note: state.note.filter((item) => item.id !== action.payload.id),
      };
    case "UN_PIN_NOTE":
      return {
        ...state,
        pinNote: state.pinNote.filter((item) => item.id !== action.payload.id),
        note: [...state.note, { ...action.payload }],
      };
    case "UNARCHIVE":
      return {
        ...state,
        archive: state.archive.filter((item) => item.id !== action.payload.id),
        note: [...state.note, { ...action.payload }],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        recycle: state.recycle.filter((item) => item.id !== action.payload),
      };
    case "RESTORE_NOTE":
      return {
        ...state,
        note: [...state.note, { ...action.payload }],
        recycle: state.recycle.filter((item) => item.id !== action.payload.id),
      };
  }
};

const NoteProvider = ({ children }) => {
  const inititalValue = {
    note: [],
    recycle: [],
    archive: [],
    pinNote: [],
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
