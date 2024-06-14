"use client";
import { AuthContext } from "@/Context/AuthContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import Form from "./Form";
import styles from "./modal.module.scss";
import Reveal from "./Reveal";

const LIST = [{ li: `Simon will give the first signal. Repeat the signal by pressing the same color lens.` }, { li: `Simon will add another signal. Repeat these two signals by pressing the same color lenses, in order.` }, { li: `Continue playing as long as you can repeat each of signal correctly.` }];

const Modal = () => {
  const { sign, log } = useContext(AuthContext);

  return (
    <>
      <dialog id={styles.window}>
        <header id={styles.intro}>
          <Reveal x={-500}>
            <h1>The Simon Game</h1>
          </Reveal>
        </header>
        {sign && <Form />}
        {log && <Form />}
        {!sign && !log && <First />}
      </dialog>
    </>
  );
};

const First = () => {
  const { handleClose, handleLog, handleSign, text } = useContext(AuthContext);
  return (
    <>
      <header id={styles.intro}>
        <Reveal x={-300}>
          <h4>{text}</h4>
        </Reveal>
      </header>
      <main id={styles.main}>
        <ol>
          {LIST.map((item, idx) => (
            <Reveal
              key={idx}
              x={-400}
            >
              <li>{item.li}</li>
            </Reveal>
          ))}
        </ol>
      </main>
      <footer id={styles.foot}>
        <form method="dialog">
          <div>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              onClick={handleSign}
            >
              Sign Up
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              onClick={handleLog}
            >
              Login
            </motion.button>
          </div>
          <div>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={handleClose}
            >
              Play as Guest
            </motion.button>
          </div>
          <Reveal x={-500}>
            <h4>
              Tip: <span>Sign Up to save Highscore </span>
            </h4>
          </Reveal>
        </form>
      </footer>
    </>
  );
};

export default Modal;
