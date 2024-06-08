import "@/app/page.scss";

type Props = {
  btn: string;
};

const PlayButton = ({ btn }: Props) => {
  return (
    <button
      type="button"
      id={btn}
      className={`btn ${btn}`}
    ></button>
  );
};

export default PlayButton;
