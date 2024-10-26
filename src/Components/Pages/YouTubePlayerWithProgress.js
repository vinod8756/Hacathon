import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Progressbar.css';

const YouTubePlayerWithProgress = ({ title, videoId }) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [player, setPlayer] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  // This function is triggered when the player is ready
  const onReady = (event) => {
    const playerInstance = event.target;
    setPlayer(playerInstance);
    setDuration(playerInstance.getDuration());
  };

  // This function is triggered when the video plays
  const onPlay = () => {
    if (player && !intervalId) {
      const newIntervalId = setInterval(() => {
        const currentTime = player.getCurrentTime();
        setProgress((currentTime / duration) * 100);
      }, 500); // Update every half second

      setIntervalId(newIntervalId);
    }
  };

  // This function is triggered when the video is paused or ends
  const onPauseOrEnd = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  // This function handles state changes like pause, play, and end
  const onStateChange = (event) => {
    switch (event.data) {
      case YouTube.PlayerState.PLAYING:
        onPlay();
        break;
      case YouTube.PlayerState.PAUSED:
      case YouTube.PlayerState.ENDED:
        onPauseOrEnd();
        if (event.data === YouTube.PlayerState.ENDED) setProgress(100);
        break;
      default:
        break;
    }
  };

  // Clear interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div style={{height:'100%'}}>
      <YouTube
        videoId={videoId}
        opts={{
          width: '100%',
          playerVars: { autoplay: 0, controls: 1 },
        }}
        onReady={onReady}
        onStateChange={onStateChange}
      />
      <h2>{title}</h2>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }} // Fixed template literal syntax
        ></div>
      </div>
    </div>
  );
};

export default YouTubePlayerWithProgress;
