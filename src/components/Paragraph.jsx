import { useEffect } from 'react';
import wordsData from '../assets/words.json';
import useStore from '../store';
import useDeviceDetection from '../hooks/useDetectDevice';
import { MobileDevice } from '../constant/constant';

const { nouns, verbs, adjectives, adverbs } = wordsData;

/**
 * Returns a random element from the given array.
 *
 * @param {Array} array - The array from which to select a random element.
 * @return {*} - The randomly selected element from the array.
 */
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * Renders a paragraph of randomly generated sentences using the words from
 * the `nouns`, `verbs`, `adverbs`, and `adjectives` arrays. The length of
 * the paragraph is determined based on the device type. The generated
 * sentences are displayed one word at a time, with the current word highlighted
 * in white text on a gray background. The user can copy the entire paragraph by
 * right-clicking and selecting "Copy".
 *
 * @return {JSX.Element} The rendered paragraph component.
 */
function Paragraph() {
  const wordsState = useStore((state) => state.wordsState);
  const setWordsState = useStore((state) => state.setWordsState);
  const currentWordIndex = useStore((state) => state.currentWordIndex);
  const deviceType = useDeviceDetection();

  // Calling to generate sentence
  useEffect(() => {
    generateSentence();
  }, []);

  const generateSentence = () => {
    let finalSentence = '';
    let paragraphLength = 0;

    if (deviceType === MobileDevice) {
      paragraphLength = 5; // for mobile devices
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

  function handleCopy(e) {
    e.preventDefault();
    return false;
  }

  return (
    <span
      onCopy={handleCopy}
      className='block p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  mx-7 md:mx-24 md:h-full lg:mx-80 lg:px-10 relative bottom-24 text-lg font-mono'
    >
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
