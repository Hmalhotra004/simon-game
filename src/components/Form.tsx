import { AuthContext } from "@/Context/AuthContext";
import { ModalContext } from "@/Context/ModalContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import styles from "./modal.module.scss";
import Reveal from "./Reveal";

const Form = () => {
  const { handleBack, text, handleClose } = useContext(ModalContext);

  const { user, googleSignIn, logOut } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      handleClose();
      handleBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header id={styles.intro}>
        <Reveal x={-300}>
          <h4>{text}</h4>
        </Reveal>
      </header>
      <form id={styles.form}>
        <Reveal>
          <input
            type="email"
            placeholder="Email"
          ></input>
        </Reveal>
        <Reveal>
          <input
            type="password"
            placeholder="Password"
          ></input>
        </Reveal>
        <div>
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {text}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onClick={handleBack}
          >
            Go Back
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          id={styles.hr}
        />
      </form>
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        onClick={handleGoogleSignIn}
      >
        Google
      </motion.button>
    </>
  );
};

export default Form;
