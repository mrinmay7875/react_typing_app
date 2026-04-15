import React, { useState, useEffect } from 'react';
import useStore from '../store';

function Timer() {
  const [seconds, setSeconds] = useState(61);

  const gameCompleted = useStore((state) => state.gameCompleted);
  const setGameCompleted = useStore((state) => state.setGameCompleted);
  const gameStarted = useStore((state) => state.gameStarted);
  const setCurrentTimer = useStore((state) => state.setCurrentTimer);

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
    // Stops the timer when user has typed all the words
    if (gameCompleted) {
      clearInterval(interval);
    }
    setCurrentTimer(seconds);
    // Clean up the interval on unmount or when seconds become 0
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  if (gameStarted) {
    return (
      <div className='w-full bg-gradient-cyan-purple py-3 px-4 text-center font-mono text-lg font-bold transition-all duration-300 shadow-lg'>
        <p className={gameCompleted ? 'text-accent-red animate-pulse' : 'text-vibrant-green'}>
          {gameCompleted ? "⏱️ Time's up!" : `⏱️ Time remaining: ${seconds} seconds`}
        </p>
      </div>
    );
  } else return null;
}

export default Timer;
