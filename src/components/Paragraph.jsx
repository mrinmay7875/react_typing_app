import React, { useState, useEffect } from "react";

import useStore from "../store";

const nouns = ["cat", "dog", "house", "car", "tree", "macbook"];
const verbs = ["runs", "jumps", "football", "sleeps", "item"];
const adjectives = ["happy", "excited", "big", "small", "colorful"];
const adverbs = ["quickly", "fast", "loudly", "softly", "carefully"];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function Paragraph() {
  const wordsState = useStore((state) => state.wordsState);
  const setWordsState = useStore((state) => state.setWordsState);
  const currentWordIndex = useStore((state) => state.currentWordIndex);
  const setCurrentWordIndex = useStore((state) => state.setCurrentWordIndex);

  // calling to generate sentence func
  useEffect(() => {
    generateSentence();
  }, []);

  const generateSentence = () => {
    let finalSentence = "";
    for (let i = 0; i < 13; i++) {
      const sentence = `${getRandomElement(nouns)} ${getRandomElement(
        verbs
      )} ${getRandomElement(adverbs)} ${getRandomElement(adjectives)}`;

      finalSentence = sentence + " " + finalSentence;
    }
    // setting words and sentnece and it is working fine
    // setParagraphState(finalSentence);
    setWordsState(finalSentence.split(" "));
  };

  console.log(wordsState);

  return (
    <span className="md:mx-24 lg:mx-64 lg:px-10 relative bottom-24 text-lg font-mono">
      {wordsState.map((word, index) => (
        <span
          className={index == currentWordIndex ? "text-white" : "text-gray-500"}
          key={index}
        >
          {`${word} `}
        </span>
      ))}
    </span>
  );
}

export default Paragraph;
