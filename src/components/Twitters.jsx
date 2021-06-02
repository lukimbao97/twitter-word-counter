import React from "react";
import Tweet from "./Tweet";
import TweetInput from "./TweetInput";
import "../css/Twitters.css";

function Twitters() {
  return (
    <div className="twitters-main-container">
      <Tweet />
      <TweetInput />
    </div>
  );
}

export default Twitters;
