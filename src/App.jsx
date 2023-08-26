import { useState } from "react";
import "./App.css";
import Paragraph from "./components/Paragraph";
import InputText from "./components/InputText";
import Timer from "./components/Timer";
import Result from "./components/Result";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold relative bottom-44 ">
        React Typing App
      </h1>
      <Paragraph />
      <InputText />
      <Timer />
      <Result />
    </div>
  );
}

export default App;
