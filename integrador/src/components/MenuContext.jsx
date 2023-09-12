// MenuContext.jsx
import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <MenuContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </MenuContext.Provider>
  );
};