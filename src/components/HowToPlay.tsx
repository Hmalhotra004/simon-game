import styles from "./howtoplay.module.scss";

const HowToPlay = () => {
  return (
    <dialog id={styles.window}>
      <div id={styles.intro}>
        <h1>The Simon Game</h1>
        <p>How to Play</p>
      </div>
      <div>
        <ol>
          <li></li>
        </ol>
      </div>
    </dialog>
  );
};

export default HowToPlay;
