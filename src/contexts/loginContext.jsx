import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    return () => {
      let Auth = localStorage.getItem("login");
      if (Auth) {
        setLogin(setLogin);
      }
    };
  }, []);

  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {children}
    </LoginContext.Provider>
  );
};
