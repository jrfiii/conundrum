import { useState, useCallback, useEffect } from "react";
import generate9Letters from "../utils/generate9LetterWord";

// import { Reorder } from "framer-motion";

function Letters() {
  const [nineLetters, set9Letters] = useState("");
  // const [letterArray, setLetterArray] = useState(['', '', '', '', '', '', '', '', '']);

  // useEffect(() => {
  //   setLetterArray(nineLetters.split(""));
  // }, [nineLetters]);

  const selectLetters = useCallback(
    (letterOrder: string): void => set9Letters(generate9Letters(letterOrder)),
    [],
  );

  // Testing  'CCVCCVCCV' or 'VVVCCCCCC'

  return (
    <>
      <h1>Letters Round</h1>
      <div>{nineLetters}</div>
      <button onClick={() => selectLetters("CCVCCVCCV")}>
        Testing CCVCCVCCV
      </button>
    </>
  );
}

export default Letters;
