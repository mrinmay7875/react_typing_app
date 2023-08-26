import { create } from 'zustand';

const useStore = create((set) => {
  return {
    paragraphState: '',
    setParagraphState: (newText) =>
      set((state) => ({ paragraphState: newText })),
    wordsState: [''],
    setWordsState: (newWords) => set((state) => ({ wordsState: newWords })),
    userInputState: '',
    setUserInputState: (text) => set((state) => ({ userInputState: text })),
    currentWordIndex: 0,
    setCurrentWordIndex: (newIndex) =>
      set((state) => ({ currentWordIndex: newIndex })),
    correctnessState: [],
    setCorrectnessState: (newCorrectness) =>
      set((state) => ({
        correctnessState: [...state.correctnessState, newCorrectness],
      })),
    gameCompleted: false,
    setGameCompleted: (completed) =>
      set((state) => ({ gameCompleted: completed })),
    gameStarted: false,
    setGameStarted: (started) => set((state) => ({ gameStarted: started })),
    currentTimer: 30,
    setCurrentTimer: (newTimer) => set((state) => ({ currentTimer: newTimer })),
  };
});

export default useStore;
