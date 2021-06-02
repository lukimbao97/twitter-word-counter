import axios from 'axios';
import React, { useState } from 'react';
import WordCounter from './WordCounter';
import "../css/TweetInput.css";

const URL = 'https://desolate-springs-52160.herokuapp.com';

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

function TweetInput() {
    const [tweet, setTweet] = useState('');
    const [tweetObj] = useState({ userName: 'BaoLK', tagName: '@Bao', avatar: 'https://picsum.photos/id/237/50/50', tweet: '' })

    const compareChara = () => {
        if (tweet.length === 0) return true;
        return limitChara - tweet.length < 0 ? true : false;
    };

    const handlePostTweet = async () => {
        const copyTweetObj = { ...tweetObj };
        copyTweetObj.tweet = tweet;
        await axios.post(`${URL}/api/tweets`, copyTweetObj);
        setTweet('');
    }

    return (
        <div className="btn-textarea-word-counter-container">
            <div className="btn-wrapper">
                <button
                    className="tweet-btn"
                    onClick={handlePostTweet}
                    disabled={compareChara()}
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
                    value={tweet}
                    onChange={e => setTweet(e.target.value)}
                    placeholder="What's happening..."
                />
            </div>
            <WordCounter
                handleCircleColor={() => handleCircleColor(tweet.length)}
                handleCountWords={() => handleCountWords(tweet.length)}
            />
        </div>
    );
}

export default TweetInput;