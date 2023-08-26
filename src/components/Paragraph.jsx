import React, { useEffect } from 'react';
import wordsData from '../assets/words.json';
import useStore from '../store';

const { nouns, verbs, adjectives, adverbs } = wordsData;


function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function Paragraph() {
  const wordsState = useStore((state) => state.wordsState);
  const setWordsState = useStore((state) => state.setWordsState);
  const currentWordIndex = useStore((state) => state.currentWordIndex);

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
    <span className='mx-7 md:mx-24 md:h-full lg:mx-80 lg:px-10 relative bottom-24 text-lg font-mono'>
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
