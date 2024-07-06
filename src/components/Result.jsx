import useStore from '../store';

import CalculateScoreUtil from './../utils/CalculateScoreUtil';

function Result() {
  const gameCompleted = useStore((state) => state.gameCompleted);

  const { calculateScore } = CalculateScoreUtil();

  if (gameCompleted) {
    return (
      <div className='result text-center mt-5'>
        <h2 className='font-mono text-2xl font-semibold mb-2'>
          Yours typing speed is
          <span className='text-teal-300'>{` ${calculateScore()} `}</span>
          words per minute
        </h2>
        <h3 className='text-lg text-gray-500 mt-5'>
          <button
            type='button'
            onClick={() => window.location.reload()}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Play Again
          </button>
        </h3>
      </div>
    );
  } else return null;
}

export default Result;
