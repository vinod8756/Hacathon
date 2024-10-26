import React from "react";
import NavBar from "../NavBar/NavBar";
import FooterSection from "../FooterSection";
import styles from "./About.module.css";

const AboutUs = () => {
  return (
    <div>
      <NavBar />

      <div className={styles.container}>
        <h2 className={styles.heading}>About Nova Next</h2>
        <p className={styles.paragraph}>
          Nova Next is an innovative e-learning platform, dedicated to making quality education accessible and personalized through the power of Artificial Intelligence (AI) and Machine Learning (ML). Our mission is to empower students and professionals alike by delivering resources and tailored learning experiences designed to meet diverse educational needs and goals.
        </p>

        <h3 className={styles.subHeading}>Our Vision</h3>
        <p className={styles.paragraph}>
          At Nova Next, we believe that learning should be more than just a journey; it should be a discovery experience that is engaging, personalized, and impactful. We aim to redefine online education by utilizing advanced technologies like AI and ML to create a curriculum that adapts to each user’s pace, strengths, and areas for improvement.
        </p>

        <h3 className={styles.subHeading}>What We Offer</h3>
        <ul className={styles.list}>
          <li>
            <strong>Adaptive Learning:</strong> Our AI-driven courses adjust to each learner's unique progress, providing a supportive and effective learning path.
          </li>
          <li>
            <strong>Hands-on Projects:</strong> With a strong focus on practical knowledge, we offer hands-on projects across a wide range of subjects, from programming to system design and more.
          </li>
          <li>
            <strong>Expert Mentorship:</strong> Our experienced mentors provide insights and guidance to help learners navigate complex topics and achieve their goals.
          </li>
          <li>
            <strong>Community Support:</strong> Join a vibrant community of learners, collaborate on projects, and grow together through shared experiences and knowledge.
          </li>
        </ul>

        <h3 className={styles.subHeading}>Our Commitment to Quality</h3>
        <p className={styles.paragraph}>
          Nova Next is committed to providing top-notch content and a robust learning experience, with the goal of shaping the future of education. Through continuous innovation and rigorous quality checks, we strive to ensure that every learner has the resources and support they need to succeed.
        </p>

        <h3 className={styles.subHeading}>Join Us on the Journey to Knowledge</h3>
        <p className={styles.paragraph}>
          Whether you're starting from scratch or enhancing your skill set, Nova Next is here to support you every step of the way. We invite you to explore, learn, and grow with us as we redefine the boundaries of online education.
        </p>
      </div>

      <FooterSection />
    </div>
  );
};

export default AboutUs;
