import "@/app/page.scss";

type Props = {
  btn: string;
  onClick: () => void;
};

const PlayButton = ({ btn, onClick }: Props) => {
  return (
    <button
      type="button"
      id={btn}
      className={`btn ${btn}`}
      onClick={onClick}
    />
  );
};

export default PlayButton;
