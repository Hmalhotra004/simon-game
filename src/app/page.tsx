import "./page.scss";

const COLOURS = ["green", "red", "yellow", "blue"];

const Home = () => {
  return (
    <section>
      <div className="main">
        <h1 id="level-title">Press Enter to Start</h1>
        <h3>
          High Score:<span id="high_s">0</span>
        </h3>
        <div className="btn-wrapper">
          <button
            type="button"
            id="green"
            className="btn green"
          ></button>
          <button
            type="button"
            id="red"
            className="btn red"
          ></button>
          <button
            type="button"
            id="yellow"
            className="btn yellow"
          ></button>
          <button
            type="button"
            id="blue"
            className="btn blue"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Home;
