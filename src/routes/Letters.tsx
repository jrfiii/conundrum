import { useState, useCallback, useRef } from "react";
import generate9Letters from "../utils/generate9LetterWord";
// import { Reorder } from "framer-motion";

// import { Reorder } from "framer-motion";

function Letters() {
  const [nineLetters, set9Letters] = useState("");
  const letterArray = useRef<string[]>();

  const selectLetters = useCallback((letterOrder: string): void => {
    const letters: string = generate9Letters(letterOrder);
    set9Letters(letters);
    letterArray.current = [...letters];
  }, []);

  // Testing  'CCVCCVCCV' or 'VVVCCCCCC'
  return (
    <>
      <h1>Letters Round</h1>
      <div>nineLetters: {nineLetters}</div>
      <div>letterArray: </div>
      <button onClick={() => selectLetters("CCVCCVCCV")}>
        Testing CCVCCVCCV
      </button>
    </>
  );
}

export default Letters;
