import {} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import RenderTime from "../components/RenderTime";

function App() {
  return (
    <>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => {
            return {
              shouldRepeat: true,
              delay: 1,
            };
          }}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
      <h1>Conundrum</h1>
    </>
  );
}

export default App;
