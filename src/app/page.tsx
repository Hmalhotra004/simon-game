"use client";
import Simon from "@/components/Simon";
import AuthContextProvider from "@/Context/AuthContext";
import { useState } from "react";
import "./page.scss";

const Home = () => {
  const [level, setLevel] = useState({ value: 0, title: "Click Here to Start", bg: "bg" });

  return (
    <AuthContextProvider>
      <section className={level.bg}>
        <Simon
          level={level}
          setLevel={setLevel}
        />
      </section>
    </AuthContextProvider>
  );
};

export default Home;
