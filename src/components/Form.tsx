import styles from "./modal.module.scss";

const Form = () => {
  const handleBack = () => {};

  return (
    <>
      <form id={styles.form}>
        <input
          type="email"
          placeholder="Email"
        ></input>
        <input
          type="password"
          placeholder="Password"
        ></input>
        <div>
          <button>Sign Up</button>
          <button onClick={handleBack}>Go Back</button>;
        </div>
      </form>
      <div id={styles.hr} />
    </>
  );
};

export default Form;
