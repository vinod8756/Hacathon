import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import banner from "../../Assests/webdevelopment.svg";
import FooterSection from "../FooterSection";
import styles from "./LandingPage.module.css";
import Card from "../Card/Card";
import image from "../../Assests/Front-end.jpg";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const authToken = "pat0VQ0b0WpYOkHt1.46f5645479f12ed6207594bfeab448d7cb6be7da1ebd4348c2386744002f5a38";
  const airtableBaseURL = "https://api.airtable.com/v0/appiirjHzkG1S05iP/Table%202?";

  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(airtableBaseURL, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        
        // Map records and filter out any records without a course value
        const records = response.data.records
          .map((record) => ({
            id: record.id,
            ...record.fields,
          }))
          .filter((record) => record.course); // Filter out records with null course values

        const uniqueCourses = Array.from(
          new Map(records.map((course) => [course.course, course])).values()
        );

        setCards(uniqueCourses);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data from Airtable.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleIframeVisibility = () => {
    setIsIframeVisible(!isIframeVisible);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "ALL"
      ? cards
      : cards.filter((card) => card.Field?.toUpperCase() === selectedCategory);

  return (
    <div>
      <NavBar />
      <div className={styles.horizontalBar}>
        <div className={styles.barItem} onClick={() => handleCategoryClick("IT")}>IT</div>
        <div className={styles.barItem} onClick={() => handleCategoryClick("SYSTEM DESIGN")}>Systems Design</div>
        <div className={styles.barItem} onClick={() => handleCategoryClick("AGRICULTURE")}>Agriculture</div>
        <div className={styles.barItem} onClick={() => handleCategoryClick("MANUFACTURING")}>Manufacturing</div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>Welcome to Code Next</h2>

          <p className={styles.paragraph}>
            Start your learning journey with us and unlock a world of coding possibilities.
          </p>

          <p className={styles.subParagraph}>
            Whether you're a beginner or a seasoned coder, we provide resources, mentorship, and hands-on projects tailored for all levels. Dive in and explore!
          </p>
        </div>

        <img className={styles.bannerImage} src={banner} alt="banner" />
      </div>
      <hr />
      <div className={styles.popularCourses}>
        <h2 style={{ textAlign: "left", marginLeft: "20px" }}>
          {selectedCategory === "ALL" ? "All Courses" : `Courses for ${selectedCategory}`}
        </h2>
        <div className={styles.coursesContainer}>
          {loading ? (
            Array(6).fill(0).map((_, index) => (
              <div key={index} className={styles.shimmerCard}>
                <div className={styles.shimmerThumbnail}></div>
                <div className={styles.shimmerTitle}></div>
                <div className={styles.shimmerSubtitle}></div>
              </div>
            ))
          ) : error ? (
            <p>{error}</p>
          ) : (
            filteredCourses.map((card) => (
              <Link to={`/view/${card.course}/${card.ID}`}>
                <Card
                  key={card.ID}
                  thumbnail={image}
                  title={card.course.replace(/-/g, " ")} // Remove hyphen from title
                  field={card.Field}
                  duration={formatDuration(card.duration || "")}
                />
              </Link>  
            ))
          )}
        </div>
      </div>

      <div className={styles.chatbotIcon} onClick={toggleIframeVisibility}>
        <FaRobot size={40} color="#333" />
      </div>

      {isIframeVisible && (
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/hgD7yJ6tYAfDPVu2qlT7R"
            style={{ width: "100%", height: "100%" }}
            title="chatbot"
          ></iframe>
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default LandingPage;
