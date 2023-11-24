import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const toggleAuth = () => {
    setAuth(!auth);
  };
  const handleLogin = (email, password) => {
    console.log("Logging in with:", email, password);
    setAuth(true);
  };
  //add later admin panel and user
  return (
    <AuthContext.Provider value={{ auth, toggleAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
