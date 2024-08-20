import { useState } from "react";
import { Reorder } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const ReorderScramble = () => {
  const [testArr, setTestArr] = useState([1, 2, 3]);

  return (
    <>
      <Reorder.Group values={testArr} onReorder={setTestArr}>
        {testArr.map((val) => (
          <Reorder.Item key={val} value={val}>
            <div>{`${val}`}</div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};

export default ReorderScramble;
