"use client";
import styles from "@/app/auth.module.scss";
import Reveal from "@/components/Reveal";
import { AuthContext } from "@/Context/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import "../page.scss";

const Form = () => {
  const { user, googleSignIn } = useContext(AuthContext);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="bg" />
      <dialog id={styles.window}>
        <header id={styles.intro}>
          <Reveal x={-500}>
            <h1>The Simon Game</h1>
          </Reveal>
          <Reveal x={-300}>
            <h4>Sign Up</h4>
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
              Sign Up
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
      </dialog>
    </>
  );
};

export default Form;