import React from "react";
import "../css/Tweet.css";

const Tweet = ({ id, tweet, avatar }) => {
  return (
    <div className="tweet-main-container">
      <div>
        <img src={avatar} alt="" />
      </div>
      <div className="tweet-container">{tweet}</div>
    </div>
  );
};

export default Tweet;
