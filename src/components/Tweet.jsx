import React from "react";
import "../css/Tweet.css";

const Tweet = ({ tagName, userName, tweet, avatar }) => {
  return (
    <div className="tweet-main-container">
      <div>
        <img src={avatar} alt="" />
      </div>
      <div className="name-tweet-wrapper">
        <span className="username-wrapper">{userName}</span>
        <span className="tagname-wrapper">{tagName}</span>
        <div className="tweet-container">{tweet}</div>
      </div>
    </div>
  );
};

export default Tweet;
