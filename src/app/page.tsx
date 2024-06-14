"use client";
import Simon from "@/components/Simon";
import AuthContextProvider from "@/Context/AuthContext";
import ModalContextProvider from "@/Context/ModalContext";
import { useState } from "react";
import "./page.scss";

const Home = () => {
  const [level, setLevel] = useState({ value: 0, title: "Click Here to Start", bg: "bg" });

  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <section className={level.bg}>
          <Simon
            level={level}
            setLevel={setLevel}
          />
        </section>
      </ModalContextProvider>
    </AuthContextProvider>
  );
};

export default Home;
