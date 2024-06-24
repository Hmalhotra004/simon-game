"use client";
import styles from "@/app/auth.module.scss";
import Reveal from "@/components/Reveal";
import { AuthContext } from "@/Context/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import "../page.scss";

const Form = () => {
  const { user, googleSignIn, handleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleGoogleSignIn = async () => {
    console.log("h");
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      handleSignIn(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  });

  return (
    <>
      <section className="bg" />
      <dialog id={styles.window}>
        <header id={styles.intro}>
          <Reveal x={-500}>
            <h1>The Simon Game</h1>
          </Reveal>
          <Reveal x={-300}>
            <h4>Log In</h4>
          </Reveal>
        </header>

        <form
          id={styles.form}
          onSubmit={handleFormSubmit}
        >
          <Reveal>
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
            ></input>
          </Reveal>

          <Reveal>
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
            ></input>
          </Reveal>

          <div>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              id={styles.btn}
              type="button"
            >
              Log In
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
          id={styles.btn}
        >
          Google
        </motion.button>
      </dialog>
    </>
  );
};

export default Form;
