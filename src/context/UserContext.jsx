import { Children, createContext, useState } from "react";
import { signInApi } from "../api/server";

const UserContext = createContext();

export const UserProvider = ({ Children }) => {
  const [user, setUser] = useState();

  const sigIn = () => {
    const currentUser = signInApi("malek.benanes@outlook.om");

    setUser(currentUser);
  };

  return (
    <UserContext.Provider value={{ user, sigIn }}>
      {children}
    </UserContext.Provider>
  );
};
