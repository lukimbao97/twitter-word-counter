import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Tweet.css";

const URL = 'https://desolate-springs-52160.herokuapp.com';

const Tweet = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getTweets() {
      const result = await axios.get(`${URL}/api/tweets`);
      setTweets(result.data);
      console.log(result.data);
    }

    getTweets();
  }, [tweets]);

  return (
    <React.Fragment>
      {tweets.map((t) => (
        <div className="tweet-main-container">
          <div>
            <img src={t.avatar} alt="" />
          </div>
          <div className="name-tweet-wrapper">
            <span className="username-wrapper">{t.userName}</span>
            <span className="tagname-wrapper">{t.tagName}</span>
            <div className="tweet-container">{t.tweet}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Tweet;
