import React from "react";
import useStore from "../store";

function Result() {
  const gameCompleted = useStore((state) => state.gameCompleted);
  const correctnessState = useStore((state) => state.correctnessState);

  // console.log("gameCompleted", gameCompleted);

  if (gameCompleted) {
    return (
      <div className="result text-center mt-5 absolute bottom-14">
        <h2 className="font-mono text-2xl font-semibold mb-2">
          Yours typing speed is{" "}
          <span className="text-emerald-300">
            {correctnessState.length * 2}
          </span>
        </h2>
        <h2 className="font-mono text-2xl font-semibold mb-2">
          words per minute
        </h2>
        <h3 className="text-lg text-gray-500">
          Refresh the page to play again!
        </h3>
      </div>
    );
  } else return null;
}

export default Result;
