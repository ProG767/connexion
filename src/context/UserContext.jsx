import { createContext, useContext, useEffect, useState } from "react";
import { signInApi } from "../api/server";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const signIn = (email) => {
    const userFromApi = signInApi(email);

    if (userFromApi) {
      setCurrentUser(userFromApi);
      setIsConnected(true);
    }

    return userFromApi;
  };

  const signOut = () => {
    setCurrentUser(null);
    setIsConnected(false);
  };

  return (
    <UserContext.Provider value={{ currentUser, isConnected, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
