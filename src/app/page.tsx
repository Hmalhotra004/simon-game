import NavBar from "@/components/NavBar";
import PlayButton from "@/components/PlayButton";
import "./page.scss";

const COLOURS = ["green", "red", "yellow", "blue"];

const Home = () => {
  return (
    <section className="bg">
      <section className="container">
        <NavBar />
        <div className="main">
          <h1 id="level-title">Press Enter to Start</h1>
          <h3>
            High Score:<span id="high_s">0</span>
          </h3>
          <div className="btn-wrapper">
            {COLOURS.map((col, idx) => (
              <PlayButton
                key={idx}
                btn={col}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
