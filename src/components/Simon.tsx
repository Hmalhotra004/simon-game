import { AuthContext } from "@/Context/AuthContext";
import { ModalContext } from "@/Context/ModalContext";
import "@/app/page.scss";
import { useContext, useState } from "react";
import HighScore from "./HighScore";
import NavBar from "./NavBar";
import PlayButton from "./PlayButton";
import Reveal from "./Reveal";

const COLOURS = ["green", "red", "yellow", "blue"];

type Props = {
  level: {
    value: number;
    title: string;
    bg: string;
  };
  setLevel: React.Dispatch<React.SetStateAction<{ value: number; title: string; bg: string }>>;
};

const Simon = ({ level, setLevel }: Props) => {
  const { modal } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  //states
  const [isStart, setIsStart] = useState(false);
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);
  const [animatingButton, setAnimatingButton] = useState("");

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
      setLevel(_ => {
        return {
          value: 0,
          title: "Game Over, Click Here to Restart",
          bg: "game-over",
        };
      });
      setIsStart(false);
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
    <section className="container">
      <NavBar />
      <div className="main">
        <Reveal x={-800}>
          <button
            id="level-title"
            onClick={handleStart}
          >
            {level.title}
          </button>
        </Reveal>
        {user && <HighScore score={level.value} />}
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
      </div>
    </section>
  );
};

export default Simon;
