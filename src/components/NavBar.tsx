import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <header className={styles.head}>
      <button
        id={styles.btn}
        className={styles.lb}
      >
        LeaderBoard
      </button>
      <button
        id={styles.btn}
        className={styles.lo}
      >
        Logout
      </button>
    </header>
  );
};

export default NavBar;
