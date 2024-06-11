import { SetStateAction, forwardRef, useRef } from "react";
import styles from "./howtoplay.module.scss";

const LIST = [{ li: `Simon will give the first signal. Repeat the signal by pressing the same color lens.` }, { li: `Simon will add another signal. Repeat these two signals by pressing the same color lenses, in order.` }, { li: `Continue playing as long as you can repeat each of signal correctly.` }];

type Props = {
  setIsHow: React.Dispatch<SetStateAction<boolean>>;
};

const HowToPlay = forwardRef(function HowToPlay() {
  const dialog = useRef();

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
            <button>Close</button>
          </form>
        </footer>
      </dialog>
      {/* , document.getElementById("modal") */}
    </>
  );
});

export default HowToPlay;
