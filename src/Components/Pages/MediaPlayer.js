import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MediaPlayer.module.css';
import NavBar from '../NavBar/NavBar';
import NewFooterSection from '../FooterSection';
import CameraComponent from '../CameraComponent';
import YouTubePlayerWithProgress from './YouTubePlayerWithProgress';
import videoData from '../../data.json'; 
import { FaCamera } from "react-icons/fa";

const MediaPlayer = () => {
  const { courseTag } = useParams();
  const [videos, setVideos] = useState([]); 
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showCamera, setShowCamera] = useState(true);

  useEffect(() => {
    // Trim the courseTag to remove any spaces and convert to the right format
    const trimmedCourseTag = courseTag.trim();
    
    // Check if the courseTag exists in the videoData
    if (videoData[trimmedCourseTag]) {
      setVideos(videoData[trimmedCourseTag]);
      setCurrentVideoIndex(0); // Reset to first video when courseTag changes
    } else {
      console.error(`No videos found for courseTag: ${trimmedCourseTag}`);
      setVideos([]); // Reset videos if courseTag doesn't match
    }
  }, [courseTag]);

  const handleNextVideo = (index) => {
    setCurrentVideoIndex(index);
  };

  const toggleCamera = () => setShowCamera(!showCamera);

  const currentVideo = videos[currentVideoIndex];

  return (
    <>
      <NavBar />
      <div className={styles.mediaPlayerContainer}>
        <div className={styles.videoPlayer}>
          {currentVideo && (
            <YouTubePlayerWithProgress title={currentVideo.title} videoId={currentVideo.id} />
          )}
        </div>

        <div className={styles.nextVideosList}>
          <h3>Next Videos</h3>
          <ul>
            {videos.map((video, index) => (
              <li
                key={video.id}
                onClick={() => handleNextVideo(index)}
                className={index === currentVideoIndex ? styles.active : ''}
              >
                {video.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cameraToggle} onClick={toggleCamera}>
          {showCamera ? <CameraComponent /> : <FaCamera />}
        </div>
      </div>
      <NewFooterSection />
    </>
  );
};

export default MediaPlayer;
