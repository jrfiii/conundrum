import { useState, useEffect, useCallback } from "react";
import testWord from "../assets/testWords";
import shuffle from "../utils/shuffle";

function Finale() {
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
      <h1>Conundrum</h1>

      <div className="card">
        <p>{scramble.toUpperCase().split("").join(" ")}</p>
        <button onClick={() => shuffleConundrum()}>re-scramble</button>
      </div>

    </>
  );
}

export default Finale;
