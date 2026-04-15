import useStore from '../store';

import CalculateScoreUtil from './../utils/CalculateScoreUtil';

function Result() {
  const gameCompleted = useStore((state) => state.gameCompleted);

  const { calculateScore } = CalculateScoreUtil();

  if (gameCompleted) {
    const score = calculateScore();
    let scoreGradient = 'from-vibrant-yellow to-vibrant-orange';

    if (score > 80) {
      scoreGradient = 'from-vibrant-green to-vibrant-cyan';
    } else if (score > 60) {
      scoreGradient = 'from-vibrant-blue to-vibrant-cyan';
    } else if (score > 40) {
      scoreGradient = 'from-vibrant-orange to-vibrant-pink';
    }

    return (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 animate-fade-in backdrop-blur-sm'>
        <div className='bg-dark-bg border-2 border-vibrant-purple rounded-xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center animate-slide-in relative overflow-hidden'>
          {/* Decorative gradient background */}
          <div className='absolute top-0 right-0 w-40 h-40 bg-vibrant-purple opacity-10 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 left-0 w-40 h-40 bg-vibrant-cyan opacity-10 rounded-full blur-2xl'></div>

          <div className='relative z-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-dark-text mb-6'>
              🎉 Your typing speed is
            </h2>
            <p className={`text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r ${scoreGradient} bg-clip-text text-transparent`}>
              {score}
            </p>
            <p className='text-xl md:text-2xl text-dark-secondary mb-8'>
              words per minute
            </p>

            {/* Performance message */}
            <p className='text-sm md:text-base text-vibrant-cyan mb-8 font-semibold'>
              {score > 80
                ? '🚀 Incredible! You\'re a typing master!'
                : score > 60
                  ? '⭐ Great job! Keep practicing!'
                  : score > 40
                    ? '💪 Good effort! Try again to improve!'
                    : '📚 Keep practicing to boost your speed!'}
            </p>

            <button
              type='button'
              onClick={() => window.location.reload()}
              className='w-full px-6 py-3 bg-gradient-vibrant hover:shadow-lg text-dark-text font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-vibrant-cyan focus:ring-offset-2 focus:ring-offset-dark-bg'
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Result;
