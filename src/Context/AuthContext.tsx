import auth from "@/firebase/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

type Modal = {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
  handleSignUp: (name: Form, email: Form, pass: Form) => void;
  handleSignIn: (email: Form, pass: Form) => void;
};

type Form = any;

export const AuthContext = createContext<Modal>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
  handleSignUp: () => {},
  handleSignIn: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleSignUp = (name: Form, email: Form, pass: Form) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(credentials => {
        console.log(credentials);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSignIn = (email: Form, pass: Form) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(credentials => {
        console.log(credentials);
      })
      .catch(err => {
        console.log(err);
      });
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
    handleSignUp,
    handleSignIn,
  };

  return <AuthContext.Provider value={global}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
