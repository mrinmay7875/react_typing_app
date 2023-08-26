import { useState } from 'react';
import Paragraph from './components/Paragraph';
import InputText from './components/InputText';
import Timer from './components/Timer';
import Result from './components/Result';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold relative bottom-36'>
        React Typing App
      </h1>
      <Paragraph />
      <Timer />
      <InputText />
      <Result />
    </div>
  );
}

export default App;
