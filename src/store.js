import { create } from "zustand";

const useStore = create((set) => {
  return {
    paragraphState: "some initial",
    setParagraphState: (newText) =>
      set((state) => ({ paragraphState: newText })),
    wordsState: ["intial word"],
    setWordsState: (newWords) => set((state) => ({ wordsState: newWords })),
    userInputState: "",
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
  };
});

export default useStore;
