import { AuthContext } from "@/Context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className={styles.head}>
      {/*  */}
      {user ? <Authorized /> : <NotAuthorized />}
    </header>
  );
};

const Authorized = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Link
        href="/leaderboard"
        id={styles.btn}
        className={styles.lb}
      >
        Leaderboard
      </Link>
      <button
        id={styles.btn}
        className={styles.lo}
        onClick={handleLogOut}
      >
        Logout
      </button>
    </>
  );
};

const NotAuthorized = () => {
  return (
    <>
      <Link
        href="/howtoplay"
        id={styles.btn}
        className={styles.lb}
      >
        How To Play
      </Link>

      <Link
        href="/signup"
        id={styles.btn}
        className={styles.lo}
      >
        Sign Up
      </Link>

      <Link
        href="/login"
        id={styles.btn}
        className={styles.lo}
      >
        Log In
      </Link>
    </>
  );
};

export default NavBar;
