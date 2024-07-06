import useStore from '../store';

const CalculateScoreUtil = () => {
  const correctnessState = useStore((state) => state.correctnessState);
  const currentTimer = useStore((state) => state.currentTimer);

  let finalScore = 0;
  let totalWordsTyped = correctnessState.length;

  function calculateScore() {
    if (currentTimer >= 1) {
      let timeUsedByUser = 60 - currentTimer;
      let WordPerSecond = totalWordsTyped / timeUsedByUser;
      finalScore = WordPerSecond * 60;
      return Math.round(finalScore);
    }
    finalScore = totalWordsTyped * 2;
    return totalWordsTyped * 2;
  }

  return { calculateScore };
};

export default CalculateScoreUtil;
