import React from 'react';
import useStore from '../store';

function Result() {
  const gameCompleted = useStore((state) => state.gameCompleted);
  const correctnessState = useStore((state) => state.correctnessState);
  const currentTimer = useStore((state) => state.currentTimer);
  const setCurrentTimer = useStore((state) => state.setCurrentTimer);

  let finalScore = 0;
  let totalWordsTyped = correctnessState.length;

  function calculateScore() {
    if (currentTimer >= 1) {
      let timeUsedByUser = 30 - currentTimer;
      let WordPerSecond = totalWordsTyped / timeUsedByUser;
      finalScore = WordPerSecond * 60;
      return finalScore;
    }
    return totalWordsTyped * 2;
  }

  if (gameCompleted) {
    return (
      <div className='result text-center mt-5'>
        <h2 className='font-mono text-2xl font-semibold mb-2'>
          Yours typing speed is
          <span className='text-teal-300'>{` ${calculateScore()} `}</span>
          words per minute
        </h2>
        <h3 className='text-lg text-gray-500'>
          Refresh the page to play again!
        </h3>
      </div>
    );
  } else return null;
}

export default Result;
