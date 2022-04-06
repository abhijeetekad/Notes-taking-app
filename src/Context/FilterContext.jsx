import { Action } from "history";
import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();
const filterFun = (state, action) => {
  switch (action.type) {
    case "":
      return;
  }
};
const FilterProvider = ({ children }) => {
  const initialValue = {
    priority: "",
  };
  const [filterState, filterDispatch] = useReducer(filterFun, initialValue);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
