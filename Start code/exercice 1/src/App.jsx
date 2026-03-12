import React, { useState } from "react";

export default function App() {
  const [scoreValue, setScoreValue]=useState(0);


  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = (scoreValue/10*100);

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
    return {
      width: `${scoreWidth}%`,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={(e) => setScoreValue(e.target.value)}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
