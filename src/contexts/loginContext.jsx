import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    let AuthToken = localStorage.getItem("token");
    if (AuthToken) {
      setLogin(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={[login, setLogin, profile, setProfile]}>
      {children}
    </LoginContext.Provider>
  );
};
