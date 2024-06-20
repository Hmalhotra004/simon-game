"use client";
import Simon from "@/components/Simon";
import { useState } from "react";
import "./page.scss";

const Home = () => {
  const [level, setLevel] = useState({ value: 0, title: "Click Here to Start", bg: "bg" });

  return (
    <section className={level.bg}>
      <Simon
        level={level}
        setLevel={setLevel}
      />
    </section>
  );
};

export default Home;
