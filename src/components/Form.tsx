import { motion } from "framer-motion";
import styles from "./modal.module.scss";
import Reveal from "./Reveal";

const Form = () => {
  const handleBack = () => {};

  return (
    <>
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
            Sign Up
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onClick={handleBack}
          >
            Go Back
          </motion.button>
        </div>
      </form>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        id={styles.hr}
      />
    </>
  );
};

export default Form;
