"use client";

import AuthContextProvider from "./AuthContext";

const Context = ({ children }: { children: React.ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Context;
