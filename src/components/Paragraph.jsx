import React, { useState, useEffect } from 'react';

import useStore from '../store';

const nouns = ['cat', 'dog', 'house', 'car', 'tree', 'macbook'];
const verbs = ['runs', 'jumps', 'football', 'sleeps', 'item'];
const adjectives = ['happy', 'excited', 'big', 'small', 'colorful'];
const adverbs = ['quickly', 'fast', 'loudly', 'softly', 'carefully'];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function Paragraph() {
  const wordsState = useStore((state) => state.wordsState);
  const setWordsState = useStore((state) => state.setWordsState);
  const currentWordIndex = useStore((state) => state.currentWordIndex);
  const setCurrentWordIndex = useStore((state) => state.setCurrentWordIndex);
  const isMobileDevice = useStore((state) => state.isMobileDevice);
  const setIsMobileDevice = useStore((state) => state.setIsMobileDevice);

  // Calling to generate sentence
  useEffect(() => {
    generateSentence();
  }, []);

  const generateSentence = () => {
    let finalSentence = '';
    let paragraphLength = 0;
    if (navigator.userAgentData.mobile) {
      paragraphLength = 3; // for mobile devices
    } else {
      paragraphLength = 10; // for desktop devices
    }

    for (let i = 0; i < paragraphLength; i++) {
      const sentence = `${getRandomElement(nouns)} ${getRandomElement(
        verbs
      )} ${getRandomElement(adverbs)} ${getRandomElement(adjectives)}`;

      finalSentence = sentence + ' ' + finalSentence;
    }
    setWordsState(finalSentence.split(' '));
  };

  return (
    <span className='mx-7 h-20 overflow-hidden md:mx-24 md:h-full lg:mx-80 lg:px-10 relative bottom-24 text-lg font-mono'>
      {wordsState.map((word, index) => (
        <span
          className={index == currentWordIndex ? 'text-white' : 'text-gray-500'}
          key={index}
        >
          {`${word} `}
        </span>
      ))}
    </span>
  );
}

export default Paragraph;
