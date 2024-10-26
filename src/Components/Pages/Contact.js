import React from "react";
import NavBar from "../NavBar/NavBar";
import FooterSection from "../FooterSection";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <NavBar />

      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.paragraph}>
          We’d love to hear from you! Whether you have a question about courses, need assistance, or want to discuss potential collaborations, feel free to reach out to us.
        </p>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <div>
              <h3 className={styles.subHeading}>Phone</h3>
              <p>+1 234 567 890</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h3 className={styles.subHeading}>Email</h3>
              <p>support@novanext.com</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h3 className={styles.subHeading}>Address</h3>
              <p>123 Nova Next Avenue, Suite 100<br />San Francisco, CA 94105, USA</p>
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.404340128853!2d-122.4011226846815!3d37.79067237975796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e4d6e1e3%3A0xb98d062141ebbbb4!2s123%20Nova%20Next%20Ave%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1616580432337!5m2!1sen!2sin"
            width="100%"
            height="300"
            frameBorder="0"
            title="Maps"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ContactUs;
