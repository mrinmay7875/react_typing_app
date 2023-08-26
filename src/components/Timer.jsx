import React, { useState, useEffect } from "react";
import useStore from "../store";

function Timer() {
  const [seconds, setSeconds] = useState(15);

  const gameCompleted = useStore((state) => state.gameCompleted);
  const setGameCompleted = useStore((state) => state.setGameCompleted);
  const gameStarted = useStore((state) => state.gameStarted);

  useEffect(() => {
    // Exit the effect if the timer reaches 0
    if (seconds <= 0) {
      setGameCompleted(true);
      return;
    }

    // Update the timer every second
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval on unmount or when seconds become 0
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  if (gameStarted) {
    return (
      <div className="absolute top-20 right-10">
        {!gameCompleted ? (
          <p>Time remaining: {seconds} seconds</p>
        ) : (
          <p>Time's up!</p>
        )}
      </div>
    );
  } else return null;
}

export default Timer;
