import { createContext, useState } from "react";

type Modal = {
  modal: boolean;
  sign: boolean;
  log: boolean;
  text: string;
  handleClose: () => void;
  handleLog: () => void;
  handleSign: () => void;
  handleBack: () => void;
};

export const ModalContext = createContext<Modal>({
  modal: true,
  sign: false,
  log: false,
  text: "How to Play",
  handleClose: () => {},
  handleLog: () => {},
  handleSign: () => {},
  handleBack: () => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(true);
  const [change, setChange] = useState({
    sign: false,
    log: false,
    text: "How to Play",
  });

  const handleSign = () => {
    setChange({ ...change, sign: !change.sign, text: "Sign Up" });
  };

  const handleLog = () => {
    setChange({ ...change, sign: !change.log, text: "Log In" });
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleBack = () => {
    setChange({ text: "How to Play", sign: false, log: false });
  };

  const global = {
    modal,
    sign: change.sign,
    log: change.log,
    text: change.text,
    handleLog,
    handleSign,
    handleClose,
    handleBack,
  };

  return <ModalContext.Provider value={global}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
