import "@/app/page.scss";
import { motion } from "framer-motion";

type Props = {
  btn: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  isAnimating: boolean | string;
};

const PlayButton = ({ btn, onClick, disabled, isAnimating }: Props) => {
  const animationVariants = {
    pressed: { scale: 0.6 },
    normal: { scale: 1 },
  };

  return (
    <motion.button
      variants={animationVariants}
      whileTap="pressed"
      animate={isAnimating ? "pressed" : "normal"}
      type="button"
      id={btn}
      className={`btn ${btn}`}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default PlayButton;
