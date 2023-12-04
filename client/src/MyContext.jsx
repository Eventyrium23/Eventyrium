import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    //Examplee 
  const [user, setUser] = useState([]);

  return (
    <MyContext.Provider value={{ user, setUser}}>
      {children}
    </MyContext.Provider>
  );
};
