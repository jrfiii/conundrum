import { useState, useCallback } from "react";
import generate9Letters from "../utils/generate9LetterWord";
import ReorderScramble from "../components/ReorderScramble";
// import { v4 as uuidv4 } from "uuid";

/**
 * The rules of Countdown state that you have to pick at least four consonants and
 * at least three vowels. Your first seven picks should be CCCCVVV in some order
 */

function Letters() {
  const [nineLetters, set9Letters] = useState("");
  // const [letterArray, setLetterArray] = useState<object[]>();

  const selectLetters = useCallback(
    (letterOrder: string): void => {
      const letters: string = generate9Letters(letterOrder);
      set9Letters(letters);
      // setLetterArray(letters.split("").map((ltr: string) => ({value: ltr, id: uuidv4()})));
    },
    [],
  );

  // Testing  'CCVCCVCCV' or 'VVVCCCCCC'
  return (
    <>
      <h1>Letters Round</h1>
      <div>nineLetters: {nineLetters}</div>
      {/* <div>letterArray: {letterArray}</div> */}
      <button onClick={() => selectLetters("CCVCCVCCV")}>
        Testing CCVCCVCCV
      </button>
      <ReorderScramble letterArray={nineLetters?.split('')} />
    </>
  );
}

export default Letters;
