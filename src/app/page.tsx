"use client";
import NavBar from "@/components/NavBar";
import PlayButton from "@/components/PlayButton";
import { useState } from "react";
import "./page.scss";

const COLOURS = ["green", "red", "yellow", "blue"];

const Home = () => {
  //states
  const [isStart, setIsStart] = useState(false);
  const [level, setLevel] = useState({ value: 0, title: "Click Here to Start", bg: "bg" });
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);

  //functions
  const handleStart = () => {
    if (isStart === false) {
      // StartOver();
      nextSequence();
      setIsStart(true);
      console.log("start");
    } else {
      StartOver();
      nextSequence();
    }
  };

  const checkAns = (level: number) => {
    if (gamePattern[level] === userPattern[level]) {
      if (userPattern.length === gamePattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      setIsStart(false);
    }
  };

  const nextSequence = () => {
    setLevel(pv => {
      return {
        value: pv.value + 1,
        title: `Level ${level.value + 1}`,
        bg: "bg",
      };
    });
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = COLOURS[randomNumber];
    setGamePattern(pv => [...pv, randomChosenColour]);
    console.log(gamePattern);
    playSound(randomChosenColour);
  };

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnId = e.currentTarget.id;
    setUserPattern(pv => [...pv, btnId]);
    playSound(btnId);
    console.log(level);
    checkAns(userPattern.length - 1);
  };

  function playSound(name: string) {
    var audio = new Audio(`/sounds/${name}.mp3`);
    audio.play();
  }

  const StartOver = () => {
    setLevel(pv => {
      return {
        value: 0,
        title: `Level ${level.value}`,
        bg: "bg",
      };
    });
    setGamePattern([]);
    setUserPattern([]);
    console.log("start over");
  };

  return (
    <section className={level.bg}>
      <section className="container">
        <NavBar />
        <div className="main">
          <button
            id="level-title"
            onClick={handleStart}
          >
            {level.title}
          </button>
          {/* <h3 id="high">
            High Score:<span id="high_value"> 0</span>
          </h3> */}
          <div className="btn-wrapper">
            {COLOURS.map((col, idx) => (
              <PlayButton
                key={idx}
                btn={col}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleBtnClick(e)}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
