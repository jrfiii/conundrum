import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

interface Props {
  letterArray?: string[] | undefined;
  // setLetterArray: Dispatch<SetStateAction<object[] | undefined>>
}

interface LtrObj {
  value: string;
  id: string;
}

const ReorderScramble = ({ letterArray }: Props) => {
  const [testArr, setTestArr] = useState<LtrObj[]>();
  // setLetterArray(letters.split("").map((ltr: string) => ({value: ltr, id: uuidv4()})));

  useEffect(() => {
    const ltrObjArr = letterArray?.map(
      (ltr: string): LtrObj => ({
        value: ltr,
        id: uuidv4(),
      }),
    );
    setTestArr(ltrObjArr);
  }, [letterArray]);

  return (
    <>
      {testArr ? (
          <Reorder.Group className="board" axis="x" values={testArr} onReorder={setTestArr}>
            {testArr?.map((val) => (
              <Reorder.Item className="tile" key={val.id} value={val}>
                  {/* {`${val.value} - ${val.id}`} type: {typeof val.id} */}
                  {val.value}
              </Reorder.Item>
            ))}
          </Reorder.Group>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ReorderScramble;
