import { createContext, useState, useContext } from "react";

const SideBarContext = createContext();
const SideBarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarToggler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SideBarContext.Provider value={{ showSidebar, sidebarToggler }}>
      {children}
    </SideBarContext.Provider>
  );
};
const useSidebar = () => useContext(SideBarContext);
export { SideBarProvider, useSidebar };
