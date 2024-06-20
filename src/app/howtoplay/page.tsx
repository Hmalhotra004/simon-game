"use client";
import "@/app/page.scss";
import Reveal from "@/components/Reveal";
import { AuthContext } from "@/Context/AuthContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import styles from "./htp.module.scss";

const LIST = [{ li: `Simon will give the first signal. Repeat the signal by pressing the same color lens.` }, { li: `Simon will add another signal. Repeat these two signals by pressing the same color lenses, in order.` }, { li: `Continue playing as long as you can repeat each of signal correctly.` }];

const HowToPlay = () => {
  const { user } = useContext(AuthContext);
  let text = user ? "Go Back" : "Play as Guest";
  return (
    <>
      <section className="bg" />
      <dialog id={styles.window}>
        <header id={styles.intro}>
          <Reveal x={-500}>
            <h1>The Simon Game</h1>
          </Reveal>
          <Reveal x={-300}>
            <h4>How To Play</h4>
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
          {!user && (
            <div>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                href="/signup"
              >
                Sign Up
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                href="/login"
              >
                Log In
              </motion.a>
            </div>
          )}

          <div>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              href="/"
            >
              {text}
            </motion.a>
          </div>
          <Reveal x={-500}>
            <h4>
              Tip: <span>Sign Up to save Highscore </span>
            </h4>
          </Reveal>
        </footer>
      </dialog>
    </>
  );
};

export default HowToPlay;
