import React, { Component } from "react";
import Tweet from "./Tweet";
import WordCounter from "./WordCounter";
import "../css/Twitters.css";

class Twitters extends Component {
  state = {
    tweets: [
      {
        avatar: "https://source.unsplash.com/random/50x50",
        tweet:
          "Just upgraded to latest chrome and experiencing this unwelcome ... Anyone know how to go back to normal?",
      },
      {
        avatar: "https://source.unsplash.com/random/50x50",
        tweet:
          "Just upgraded to latest chrome and experiencing this unwelcome ... Anyone know how to go back to normal?",
      },
    ],
    tweetValue: "",
    maxChara: 50,
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
    tweetObj.avatar = "https://source.unsplash.com/random/50x50";
    tweetObj.tweet = tweetValue;
    tweets.push(tweetObj);
    this.setState({
      tweets,
      tweetValue: "",
    });
    event.preventDefault();
  };

  handleCountWords = () => {
    const { tweetValue } = this.state;
    let worldCount = 50;

    return worldCount - tweetValue.length;
  };

  handleCircleColor = () => {
    const { tweetValue, maxChara } = this.state;
    let color = "";

    if (maxChara - tweetValue.length < 0) color = "-red";
    else if (maxChara - tweetValue.length <= 10) color = "-yellow";

    return color;
  };

  compareChara = () => {
    const { tweetValue, maxChara } = this.state;
    return maxChara - tweetValue.length < 0 ? true : false;
  };

  render() {
    const { tweets, tweetValue } = this.state;
    return (
      <div className="twitters-main-container">
        {tweets.map((t) => (
          <Tweet avatar={t.avatar} tweet={t.tweet} />
        ))}
        <textarea
          cols="4"
          rows="6"
          value={tweetValue}
          onChange={this.handleChange}
        />
        <WordCounter
          handleCircleColor={this.handleCircleColor}
          handleCountWords={this.handleCountWords}
        />
        <button onClick={this.handlePostTweet} disabled={this.compareChara()}>
          Post
        </button>
      </div>
    );
  }
}

export default Twitters;
