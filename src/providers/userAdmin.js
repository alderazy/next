"use client";
import { useState, createContext, useContext, Children } from "react";

const custmContext = createContext();

export const useCustmContextUser = () => {
  const contxt = useContext(custmContext);
  if (!contxt) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return contxt;
};

export const UserAdmin = ({ children, initailUser }) => {
  const [userName, setUserName] = useState(initailUser);
  return (
    <custmContext.Provider value={{ userName, setUserName }}>
      {children}
    </custmContext.Provider>
  );
};
