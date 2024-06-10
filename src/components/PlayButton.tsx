import "@/app/page.scss";
import { motion } from "framer-motion";

type Props = {
  btn: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  scale: number
};

const PlayButton = ({ btn, onClick, scale }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.6 }}
      animate={{ scale: scale }}
      type="button"
      id={btn}
      className={`btn ${btn}`}
      onClick={onClick}
    />
  );
};

export default PlayButton;
