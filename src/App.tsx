import { useState, useEffect, useCallback } from "react";
import testWord from "./assets/testWords";
import shuffle from "./utils/shuffle";
import "./App.css";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const conundrum = testWord;
  const [scramble, setScramble] = useState("");

  const shuffleConundrum = useCallback(
    (): void => setScramble(shuffle(conundrum)),
    [conundrum],
  );

  useEffect(() => {
    shuffleConundrum();
  }, [shuffleConundrum]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Conundrum</h1>
      <div className="card">
        <p>{scramble.toUpperCase().split("").join(" ")}</p>
        <button onClick={() => shuffleConundrum()}>re-scramble</button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
