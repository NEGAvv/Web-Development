import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth(!auth);
  };

  const handleLogin = (email, password) => {
    const user = JSON.parse(localStorage.getItem("user")) || [];
    const loggedInUser = user.find(
      (u) => u.email === email && u.password === password
    );

    if (loggedInUser) {
      console.log("User found. Logging in...");
      setAuth(true);
    } else {
      console.log("User not found. Redirecting to registration...");
      user.push({ email: email, password: password });
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(true);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
