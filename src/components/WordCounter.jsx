import React from "react";
import "../css/WordCounter.css";

const WordCounter = (props) => {
  return (
    <div className={`world-count-wrapper${props.handleCircleColor()}`}>
      <span>{props.handleCountWords()}</span>
    </div>
  );
};

export default WordCounter;
