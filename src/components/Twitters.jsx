import React, { Component } from "react";
import Tweet from "./Tweet";
import WordCounter from "./WordCounter";
import "../css/Twitters.css";

const limitChara = 50;

export const handleCircleColor = (tweetValueLength) => {
  let color = "";

  if (limitChara - tweetValueLength < 0) color = "-red";
  else if (limitChara - tweetValueLength <= 10) color = "-yellow";

  return color;
};

export const handleCountWords = (tweetValueLength) => {
  return limitChara - tweetValueLength;
};
class Twitters extends Component {
  state = {
    tweets: [
      {
        userName: "Marin Todorov",
        tagName: "@icanzilb",
        avatar: "https://source.unsplash.com/random/50x50",
        tweet:
          "Just upgraded to latest chrome and experiencing this unwelcome ... Anyone know how to go back to normal?",
      },
      {
        userName: "Marin Todorov",
        tagName: "@icanzilb",
        avatar: "https://source.unsplash.com/random/50x50",
        tweet:
          "Just upgraded to latest edge and experiencing this unwelcome ... It's still suck!!!!",
      },
    ],
    tweetValue: "",
  };

  handleChange = (event) => {
    const tweetValue = event.target.value;
    this.setState({
      tweetValue,
    });
  };

  handlePostTweet = (event) => {
    const { tweetValue } = this.state;
    let { tweets } = this.state;
    let tweetObj = {};
    tweetObj.userName = "BaoLK";
    tweetObj.tagName = "@Bao";
    tweetObj.avatar = "https://picsum.photos/id/237/50/50";
    tweetObj.tweet = tweetValue;
    tweets.push(tweetObj);
    this.setState({
      tweets,
      tweetValue: "",
    });
    event.preventDefault();
  };

  compareChara = () => {
    const { tweetValue } = this.state;
    if (tweetValue.length === 0) return true;
    return limitChara - tweetValue.length < 0 ? true : false;
  };

  handleRedundantChara = () => {
    const { tweetValue } = this.state;
    let value = tweetValue.slice(0, 50);
    let redundantValue = tweetValue.slice(50);

    return (
      <p>
        {value}
        {redundantValue && (
          <span style={{ backgroundColor: "#FF0000" }}>{redundantValue}</span>
        )}
      </p>
    );
  };

  render() {
    const { tweets, tweetValue } = this.state;
    return (
      <div className="twitters-main-container">
        {tweets.map((t, index) => (
          <Tweet
            key={index}
            userName={t.userName}
            tagName={t.tagName}
            avatar={t.avatar}
            tweet={t.tweet}
          />
        ))}
        <div className="btn-textarea-word-counter-container">
          <div className="btn-wrapper">
            <button
              className="tweet-btn"
              onClick={this.handlePostTweet}
              disabled={this.compareChara()}
            >
              Tweet
            </button>
          </div>
          <div className="twitters-textarea-and-img-container">
            <img
              src="https://picsum.photos/id/237/50/50"
              alt=""
              style={{ maxHeight: "50px", marginTop: "10px" }}
            />
            <textarea
              cols="4"
              rows="6"
              value={tweetValue}
              onChange={this.handleChange}
              placeholder="What's happening..."
            />
          </div>
          <WordCounter
            handleCircleColor={() => handleCircleColor(tweetValue.length)}
            handleCountWords={() => handleCountWords(tweetValue.length)}
          />
        </div>
      </div>
    );
  }
}

export default Twitters;
