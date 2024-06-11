import { SetStateAction, forwardRef, useRef } from "react";
import styles from "./howtoplay.module.scss";

const LIST = [{ li: `Simon will give the first signal. Repeat the signal by pressing the same color lens.` }, { li: `Simon will add another signal. Repeat these two signals by pressing the same color lenses, in order.` }, { li: `Continue playing as long as you can repeat each of signal correctly.` }];

type Props = {
  setIsHow: React.Dispatch<SetStateAction<boolean>>;
};

const HowToPlay = forwardRef(function HowToPlay({ setIsHow }: Props) {
  const dialog = useRef();

  const handleClose = () => {
    setIsHow(false);
    // dialog.current.close();
  };

  return (
    <>
      <dialog
        id={styles.window}
        // ref={dialog}
      >
        <header id={styles.intro}>
          <h1>The Simon Game</h1>
          <h4>How to Play</h4>
        </header>
        <main id={styles.main}>
          <ol>
            {LIST.map((item, idx) => (
              <li key={idx}>{item.li}</li>
            ))}
          </ol>
        </main>
        <footer id={styles.foot}>
          <form method="dialog">
            <div>
              <button>Register</button>
              <button>Login</button>
            </div>
            <div>
              <button onClick={handleClose}>Close</button>
            </div>
            <div>
              <h4>
                Tip: <span>Register to save Highscore </span>
              </h4>
            </div>
          </form>
        </footer>
      </dialog>
      {/* , document.getElementById("modal") */}
    </>
  );
});

export default HowToPlay;
