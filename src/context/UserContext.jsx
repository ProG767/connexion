import { Children, createContext, useContext, useState } from "react";
import { signInApi } from "../api/server";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = (email) => {
    const userFromApi = signInApi(email);

    if (userFromApi) {
      setCurrentUser(userFromApi);
    }

    return userFromApi;
  };

  return (
    <UserContext.Provider value={{ currentUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé
export function useUser() {
  return useContext(UserContext);
}
