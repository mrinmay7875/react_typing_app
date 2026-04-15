import useStore from '../store';

const InputText = () => {
  const userInputState = useStore((state) => state.userInputState);
  const setUserInputState = useStore((state) => state.setUserInputState);
  const currentWordIndex = useStore((state) => state.currentWordIndex);
  const setCurrentWordIndex = useStore((state) => state.setCurrentWordIndex);
  const wordsState = useStore((state) => state.wordsState);
  const setCorrectnessState = useStore((state) => state.setCorrectnessState);
  const setGameStarted = useStore((state) => state.setGameStarted);
  const gameCompleted = useStore((state) => state.gameCompleted);
  const setGameCompleted = useStore((state) => state.setGameCompleted);
  const currentTimer = useStore((state) => state.currentTimer);
  const setCurrentTimer = useStore((state) => state.setCurrentTimer);

  function handleUserInput(e) {
    let inputValue = e.target.value;
    const inputWithoutSpaces = inputValue.replace(/\s+/g, '');
    setUserInputState(inputWithoutSpaces);
    setGameStarted(true);

    if (inputWithoutSpaces === wordsState[currentWordIndex]) {
      setCorrectnessState(true);
      setCurrentWordIndex(currentWordIndex + 1);
      setUserInputState('');
    }

    // User has typed all the words
    if (currentWordIndex === wordsState.length - 2) {
      setGameCompleted(true);
      setUserInputState('');
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    return false;
  }

  return (
    <div className='w-full max-w-2xl mx-auto px-4'>
      <input
        onChange={handleUserInput}
        onPaste={handlePaste}
        type='text'
        disabled={gameCompleted}
        value={userInputState}
        className='w-full px-4 py-3 border-2 border-dark-border rounded-lg bg-dark-bg text-dark-text font-mono text-base md:text-lg focus:outline-none focus:border-vibrant-cyan focus:ring-2 focus:ring-vibrant-cyan focus:ring-opacity-50 focus:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder-dark-secondary text-center'
        placeholder='Type your text here...'
      />
    </div>
  );
};

export default InputText;
