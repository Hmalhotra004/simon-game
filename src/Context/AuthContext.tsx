import auth from "@/firebase/firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

type Modal = {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
};

export const AuthContext = createContext<Modal>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  const global = {
    user,
    googleSignIn,
    logOut,
  };

  return <AuthContext.Provider value={global}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
