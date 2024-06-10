"use client";
import NavBar from "@/components/NavBar";
import PlayButton from "@/components/PlayButton";
import { useEffect, useState } from "react";
import "./page.scss";

const COLOURS = ["green", "red", "yellow", "blue"];

const Home = () => {
  //states
  const [isStart, setIsStart] = useState(false);
  const [level, setLevel] = useState(0);
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);

  //effects
  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      console.log(e.keyCode);
      if (e.keyCode === 32) {
        setIsStart(true);
        setLevel(pv => pv + 1);
        nextSequence();
        console.log("start");
      }
    });
  });

  //functions
  const nextSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = COLOURS[randomNumber];
    setGamePattern(pv => [...pv, randomChosenColour]);
    console.log(gamePattern);
    playSound(randomChosenColour);
  };

  const handleBtnClick = () => {
    setLevel(pv => pv + 1);
    console.log(level);
  };

  function playSound(name: string) {
    var audio = new Audio(`/sounds/${name}.mp3`);
    audio.play();
  }

  return (
    <section className="bg">
      <section className="container">
        <NavBar />
        <div className="main">
          <h1 id="level-title">{isStart ? `Level: ${level}` : "Press Enter to Start"}</h1>
          {/* <h3 id="high">
            High Score:<span id="high_value"> 0</span>
          </h3> */}
          <div className="btn-wrapper">
            {COLOURS.map((col, idx) => (
              <PlayButton
                key={idx}
                btn={col}
                onClick={handleBtnClick}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
