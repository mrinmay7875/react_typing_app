import React from "react";
import useStore from "../store";

function Result() {
  const gameCompleted = useStore((state) => state.gameCompleted);
  const correctnessState = useStore((state) => state.correctnessState);

  // console.log("gameCompleted", gameCompleted);

  if (gameCompleted) {
    return (
      <div className="result">
        <h2>Yours words per min is {correctnessState.length} </h2>
      </div>
    );
  } else return null;
}

export default Result;
