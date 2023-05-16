import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      subscribe();
    };
  }, []);   

  const logout = () => {
    signOut(auth);
  };

  return (
    <UserAuthContext.Provider value={{ signUp, logIn, logout, user }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export function useUserAuth (){
  return useContext(UserAuthContext);
};
