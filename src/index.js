import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Beev from './Beev';
import reportWebVitals from './reportWebVitals';
var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
  handle: "catperson",
  name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
  };
  function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
    <img
    src={url}
    className="avatar"
    alt="avatar" />
    );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}
function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="namewith-handle">
    <span className="name">{name}</span>
    <span className="handle">@{handle}</span>
    </span>
  );
}
const Time = ({ time }) => {
  const timeString = "23:15:03";
  return (
    <span className="time">
      {timeString}
    </span>
  );
};
function getRetweetCount(count) {
  if(count > 0) {
    return (
    <span className="retweet-count">
      {count}
    </span>
    );
  }
    else  {
      return null;
    }
}

function Count({ count }) {
  if(count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  }
  else {
    return null;
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweetbutton">
  <i className="fa fa-retweet"/>
  {getRetweetCount(count)}
  </span>
  );
  const LikeButton = ({ count }) => (
  <span className="likebutton">
  <i className="fa fa-heart"/>
  {count > 0 &&
  <span className="like-count">
  {count}
  </span>}
  </span>
  );


function Tweet({ tweet }) {
  return (
  <div className="tweet"> 
    <Avatar hash={tweet.gravatar}/>                                   
  <div className="content">
    <NameWithHandle/><Time/>
    <Message text={tweet.message}/>
      <div className="buttons">
        <RetweetButton count={tweet.retweets}/>
        <LikeButton count={tweet.likes}/>
      </div>
    </div>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Beev/>,
  //<Tweet />,
  
  <React.StrictMode>

  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
