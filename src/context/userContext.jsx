import React, { createContext } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  return (
    <userContext.Provider value={{ name: "yadin" }}>
      {children}
    </userContext.Provider>
  );
};
