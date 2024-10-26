import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./LandingPage.module.css";
import image from "../../Assests/Front-end.jpg";

const FilteredCourses = () => {
  const { fieldTag } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authToken = "pat0VQ0b0WpYOkHt1.46f5645479f12ed6207594bfeab448d7cb6be7da1ebd4348c2386744002f5a38";
  const airtableBaseURL = "https://api.airtable.com/v0/appiirjHzkG1S05iP/Table%202?";

  // Valid fields for filtering
  const validFields = ["IT", "SYSTEM DESIGN", "AGRICULTURE", "MANUFACTURING"];

  // Duration formatting function
  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!validFields.includes(fieldTag.toUpperCase())) {
        setCards([]); // Empty list if fieldTag is invalid
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(airtableBaseURL, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });
        const records = response.data.records.map((record) => ({
          id: record.id,
          ...record.fields,
        }));

        const filteredCourses = records.filter(
          (course) => course.Field?.toUpperCase() === fieldTag.toUpperCase()
        );

        setCards(filteredCourses);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data from Airtable.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fieldTag]);

  return (
    <div className={styles.filteredCoursesContainer}>
      <h2>Courses for {fieldTag}</h2>
      <div className={styles.coursesContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card.id}
              thumbnail={image}
              title={card.course}
              field={card.Field}
              duration={formatDuration(card.duration || 1390)}
            />
          ))
        ) : (
          <p>No courses available for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredCourses;
