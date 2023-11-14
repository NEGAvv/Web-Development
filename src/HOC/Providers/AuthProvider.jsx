import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const toggleAuth = () => {
    setAuth(!auth);
  };
  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
