import { useState, useCallback } from "react";
import generate9Letters from "../utils/generate9LetterWord";
import ReorderScramble from "../components/ReorderScramble";

/**
 * The rules of Countdown state that you have to pick at least four consonants and
 * at least three vowels. Your first seven picks should be CCCCVVV in some order
 */

function Letters() {
  const [nineLetters, set9Letters] = useState("");
  const [letterArray, setLetterArray] = useState<string[]>();

  const selectLetters = useCallback(
    (letterOrder: string): void => {
      const letters: string = generate9Letters(letterOrder);
      set9Letters(letters);
      setLetterArray(letters.split(""));
    },
    [letterArray],
  );

  // Testing  'CCVCCVCCV' or 'VVVCCCCCC'
  return (
    <>
      <h1>Letters Round</h1>
      <div>nineLetters: {nineLetters}</div>
      <div>letterArray: {letterArray}</div>
      <button onClick={() => selectLetters("CCVCCVCCV")}>
        Testing CCVCCVCCV
      </button>
      <ReorderScramble />
    </>
  );
}

export default Letters;
