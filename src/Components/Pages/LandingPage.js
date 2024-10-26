import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import banner from "../../Assests/webdevelopment.svg";
import FooterSection from "../FooterSection";
import styles from "./LandingPage.module.css";
import thumbnail from "../../Assests/Front-end.jpg";
import CourseCard from "../CarousalCard";


const fields = {
    "All": [
     "Arduino",
     "Embedded_Systems",
     "Rasberri_pi",
     "React_JS",
     "Node_JS",
     "Cyber_Security",
     "Agriculture",
     "Manufacturing",
   ],
   "IT": [
     "React_JS",
     "Node_JS",
     "Cyber_Security",
   ],
   "SYSTEM DESIGN" :[
      "Aurdino",
      "Rasberri_pi",
      "Embeded_System"
   ],
   "AGRICULTURE" : [
     "Agriculture",
     "Horticuture"
   ],
   "MANUFACTURING" : [
     "Manufacturing"
   ]
 };
 let txt = "All Our Courses"


const LandingPage = () => {

    const [filter , setfilter] = useState(fields.All)

  
  const handleCategoryClick = (category) => {
    setfilter(category)

  };


  return (
    <div>
      <NavBar />
      <div className={styles.horizontalBar}>
        <div className={styles.barItem} onClick={() => handleCategoryClick(fields.IT)}>IT</div>
        <div className={styles.barItem} onClick={() => handleCategoryClick(fields["SYSTEM DESIGN"])}>System Design</div>
        <div className={styles.barItem} onClick={() => handleCategoryClick(fields.AGRICULTURE)}>Agriculture</div>
        <div className={styles.barItem} onClick={() => handleCategoryClick(fields.MANUFACTURING)}>Manufacturing</div>
      </div>
      <div className={styles.container}>
      
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>Welcome to Nova Next</h2>
          <p className={styles.paragraph}>
            Start your learning journey with us and unlock a world of coding possibilities.
          </p>
          <p className={styles.subParagraph}>
            Whether you're a beginner or a seasoned coder, we provide resources, mentorship, and hands-on projects tailored for all levels. Dive in and explore!
          </p>
        </div>
        <img className={styles.bannerImage} src={banner} alt="banner" />
      </div>
      <hr></hr>
      <h2 style = {{textAlign: 'left' , marginLeft : '20px'}}>{txt}</h2>
      <div className={styles.cardContainer}>
        {filter.map((title) => (
          <CourseCard
            key={title} 
            title={title}
            thumbnail={thumbnail}
          />
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default LandingPage;
