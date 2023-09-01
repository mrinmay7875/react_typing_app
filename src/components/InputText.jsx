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
    <div className='p-4'>
      <div className='w-full max-w-md px-4'>
        <input
          onChange={handleUserInput}
          onPaste={handlePaste}
          type='text'
          disabled={gameCompleted}
          value={userInputState}
          className='w-full md:w-96 px-3 py-2 relative bottom-20 border rounded-md focus:ring focus:ring-blue-300'
          placeholder='Type your text here...'
        />
      </div>
    </div>
  );
};

export default InputText;
