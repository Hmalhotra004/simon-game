"use client";
import HighScore from "@/components/HighScore";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar";
import PlayButton from "@/components/PlayButton";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import "./page.scss";

const COLOURS = ["green", "red", "yellow", "blue"];

const Home = () => {
  //states
  const [isStart, setIsStart] = useState(false);
  const [level, setLevel] = useState({ value: 0, title: "Click Here to Start", bg: "bg" });
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);
  const [animatingButton, setAnimatingButton] = useState("");
  const [isHow, setIsHow] = useState(true);

  //functions
  const handleStart = () => {
    if (isStart === false) {
      StartOver();
      nextSequence();
      setIsStart(true);
    } else {
      StartOver();
    }
  };

  const checkAns = (idx: number, arr: string[]) => {
    if (gamePattern[idx] === arr[idx]) {
      if (arr.length === gamePattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
        return;
      }
    } else {
      playSound("wrong");
      setIsStart(false);
      setLevel(_ => {
        return {
          value: 0,
          title: "Game Over, Click Here to Restart",
          bg: "game-over",
        };
      });
    }
  };

  const handleBtnClick = (e: React.MouseEvent) => {
    if (!isStart) return;

    const btnId = e.currentTarget.id;
    const newPattern = [...userPattern, btnId];
    checkAns(newPattern.length - 1, newPattern);
    playSound(btnId);
    setUserPattern(newPattern);
  };

  const nextSequence = () => {
    setUserPattern([]);
    setLevel(pv => {
      return {
        value: pv.value + 1,
        title: `Level ${pv.value + 1}`,
        bg: "bg",
      };
    });
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = COLOURS[randomNumber];
    setGamePattern(pv => {
      const newPattern = [...pv, randomChosenColour];
      playSound(randomChosenColour);
      animate(randomChosenColour);
      return newPattern;
    });
  };

  const StartOver = () => {
    setIsStart(false);
    setLevel({
      value: 0,
      title: "Click Here to Start",
      bg: "bg",
    });
    setGamePattern([]);
    setUserPattern([]);
  };

  const animate = (btn: string) => {
    setAnimatingButton(btn);
    setTimeout(() => setAnimatingButton(""), 200);
  };

  const playSound = (name: string) => {
    const audio = new Audio(`/sounds/${name}.mp3`);
    audio.play();
  };

  return (
    <>
      <section className={level.bg}>
        <section className="container">
          {!isHow && <NavBar />}
          <div className="main">
            {isHow && <Modal setIsHow={setIsHow} />}
            {!isHow && (
              <>
                <Reveal x={-800}>
                  <button
                    id="level-title"
                    onClick={handleStart}
                  >
                    {level.title}
                  </button>
                </Reveal>
                <HighScore score={level.value} />
                <div className="btn-wrapper">
                  {COLOURS.map((col, idx) => (
                    <PlayButton
                      key={idx}
                      btn={col}
                      onClick={(e: React.MouseEvent) => handleBtnClick(e)}
                      disabled={!isStart}
                      isAnimating={animatingButton === col}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
