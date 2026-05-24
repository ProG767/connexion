import { createContext, useContext, useEffect, useState } from "react";
import { signInApi, User } from "../api/server";

const UserContext = createContext({});
// : ReactNode | ReactNode[]

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const UserProvider: React.FC<any> = ({
  children,
}: Props): React.ReactNode => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [isConnected, setIsConnected] = useState(false);

  const signIn = (email: string) => {
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
