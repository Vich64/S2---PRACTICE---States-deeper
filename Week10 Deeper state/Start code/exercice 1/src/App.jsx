import React from "react";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState("1");

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color based on score
    let scoreColor;
    if (score <= 3) {
      scoreColor = "#f6adde";
    } else if (score <= 7) {
      scoreColor = "#f900a6"; 
    } else {
      scoreColor = "#f9007d";
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (1 to 10): </small>
        <input
          type="number"
          min="1"
          max="10"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
