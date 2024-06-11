import "@/app/page.scss";
import { useEffect, useState } from "react";

type Props = {
  score: number;
};

const HighScore = ({ score }: Props) => {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const localHighScore = localStorage.getItem("highScore");
    const loScore = Number(localHighScore);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score.toString());
    } else {
      setHighScore(loScore);
      localStorage.setItem("highScore", loScore.toString());
    }
  }, [score, highScore]);

  return (
    <h3 id="high">
      High Score:<span id="high_value">{highScore}</span>
    </h3>
  );
};

export default HighScore;
