import { useState, useEffect, useCallback } from "react";
import generate9Letters from "../utils/generate9LetterWord";
import ReorderScramble from "../components/ReorderScramble";
// import { v4 as uuidv4 } from "uuid";

/**
 * The rules of Countdown state that you have to pick at least four consonants and
 * at least three vowels. Your first seven picks should be CCCCVVV in some order
 */

function Letters() {
  const [consonantsVowels, setConsVowel] = useState("");
  const [consButtonDisabled, setConsButtonDisabled] = useState(false);
  const [vowelButtonDisabled, setVowelButtonDisabled] = useState(false);

  const [nineLetters, set9Letters] = useState("");

  useEffect(() => {
    //verification to keep letter choice in line with rules of game mode
    const choiceLen = consonantsVowels.length;
    const numCons = [...consonantsVowels.matchAll(/C/g)].length;
    const numVowels = [...consonantsVowels.matchAll(/V/g)].length;

    if (choiceLen < 7) {
      numCons < 4 ? setConsButtonDisabled(false) : setConsButtonDisabled(true);
      numVowels < 3
        ? setVowelButtonDisabled(false)
        : setVowelButtonDisabled(true);
    } else {
      setConsButtonDisabled(false);
      setVowelButtonDisabled(false);
    }
  }, [consonantsVowels]);

  const chooseLetterType = (type: string) => {
    setConsVowel((prevState: string) => prevState + type);
  };

  const selectLetters = useCallback((letterOrder: string): void => {
    const letters: string = generate9Letters(letterOrder);
    set9Letters(letters);
  }, []);

  // Testing  'CCVCCVCCV' or 'VVVCCCCCC'
  return (
    <>
      <h1>Letters Round</h1>
      {nineLetters.length === 9 ? (
        <ReorderScramble letterArray={nineLetters?.split("")} />
      ) : (
        <div className="board">
          {consonantsVowels.split("").map((ltr) => (
            <div className="tile placeholder">
              {ltr === "C" ? "Consonant" : "Vowel"}
            </div>
          ))}
        </div>
      )}

      {/* <div>nineLetters: {nineLetters}</div> */}
      {/* <button onClick={() => selectLetters("CCVCCVCCV")}>
        Testing CCVCCVCCV
      </button> */}
      {/* <div>consonantsVowels: {consonantsVowels}</div> */}

      {consonantsVowels.length < 9 ? (
        <>
          <button
            disabled={consButtonDisabled}
            onClick={() => chooseLetterType("C")}
          >
            Consonant
          </button>
          <button
            disabled={vowelButtonDisabled}
            onClick={() => chooseLetterType("V")}
          >
            Vowel
          </button>
        </>
      ) : (
        <button onClick={() => selectLetters(consonantsVowels)}>
          Generate Letters
        </button>
      )}
    </>
  );
}

export default Letters;
