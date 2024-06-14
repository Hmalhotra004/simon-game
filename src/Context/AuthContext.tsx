import { createContext, useState } from "react";

type Modal = {
  user: null | string;
};

export const ModalContext = createContext<Modal>({
  user: " ",
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | string>(null);

  const global = {
    user,
  };

  return <ModalContext.Provider value={global}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
