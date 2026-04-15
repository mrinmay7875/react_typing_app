import Paragraph from './components/Paragraph';
import InputText from './components/InputText';
import Timer from './components/Timer';
import Result from './components/Result';

function App() {
  return (
    <div className='flex flex-col w-screen min-h-screen bg-dark-bg overflow-x-hidden relative'>
      {/* Animated background gradient accents */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-vibrant-blue opacity-10 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-20 left-0 w-96 h-96 bg-vibrant-purple opacity-10 rounded-full blur-3xl pointer-events-none'></div>

      {/* Timer Bar - Integrated into layout */}
      <Timer />

      {/* Main Content */}
      <div className='flex flex-col items-center justify-center flex-1 w-full px-4 py-8 gap-8 md:gap-10 lg:gap-12 relative z-10'>
        {/* Header Section */}
        <div className='text-center w-full max-w-4xl'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-cyan-purple bg-clip-text text-transparent pt-6 md:pt-8 animate-slide-in'>
            React Typing App
          </h1>
          <div className='h-1 w-24 bg-gradient-vibrant mx-auto mt-4 rounded-full'></div>
        </div>

        {/* Typing Content Section */}
        <div className='flex flex-col items-center gap-6 md:gap-8 w-full'>
          {/* Paragraph Display */}
          <Paragraph />

          {/* Input Field */}
          <InputText />
        </div>

        {/* Results Modal */}
        <Result />
      </div>
    </div>
  );
}

export default App;
