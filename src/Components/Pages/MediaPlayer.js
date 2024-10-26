import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './MediaPlayer.module.css';
import NavBar from '../NavBar/NavBar';
import NewFooterSection from '../FooterSection';

const MediaPlayer = () => {
  const { courseTag, videoId } = useParams(); // Get courseTag and videoId from the route
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authToken = 'pat0VQ0b0WpYOkHt1.46f5645479f12ed6207594bfeab448d7cb6be7da1ebd4348c2386744002f5a38'; // Replace with your actual token
  const airtableBaseURL = 'https://api.airtable.com/v0/appiirjHzkG1S05iP/Table%202?';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(airtableBaseURL, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        });

        // Map records to extract relevant fields
        const records = response.data.records.map((record) => ({
          id: record.id,
          ...record.fields,
        }));

        // Filter videos by the course tag
        const filteredVideos = records.filter(video => video.course === courseTag);
        console.log(filteredVideos)
        setVideos(filteredVideos);
        
        // Find the initial video index based on the videoId parameter
        const initialIndex = filteredVideos.findIndex(video => video.ID === parseInt(videoId));
        setCurrentVideoIndex(initialIndex);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to fetch video data.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [courseTag, videoId, currentVideoIndex]); // Depend on courseTag and videoId

  const handleNextVideo = () => {
    // Check if there’s a next video
    if (currentVideoIndex < videos.length - 1) {
      const nextIndex = currentVideoIndex + 1;
      const nextVideoId = videos[nextIndex].ID; // Get the next video's ID from `videos`
      
      // Update `currentVideoIndex` and navigate to the next video URL
      setCurrentVideoIndex(nextIndex);
      navigate(`/view/${courseTag}/${nextVideoId}`);
    }
  };
  
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const currentVideo = videos[currentVideoIndex];

  return (
    <>
      <NavBar />
      <div className={styles.mediaPlayerContainer}>
        {currentVideo && (
          <div className={styles.videoContainer}>
            <iframe
              title={currentVideo.title}
              width="100%"
              height="400"
              src={currentVideo.link}
              allowFullScreen
            ></iframe>
            <h2>{currentVideo.title}</h2>
            <button onClick={handleNextVideo} className={styles.nextVideoBtn}>
              Next Video
            </button>
          </div>
        )}
        {currentVideoIndex !== null && currentVideoIndex < videos.length - 1 && (
          <div className={styles.nextVideoInfo}>
            <h3>Next Video:</h3>
            <p>{videos[currentVideoIndex + 1].title}</p>
          </div>
        )}
      </div>
      <NewFooterSection />
    </>
  );
};

export default MediaPlayer;
