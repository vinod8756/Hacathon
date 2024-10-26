import styles from './Card.module.css';

const Card = ({ thumbnail, title, field, duration }) => (
    <div className={styles.card}>
        <div className={styles.thumbnailContainer}>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <span className={styles.tag}>{field}</span>
            <p className={styles.duration}>{duration}</p>
        </div>
        
        <h3 className={styles.title}>{title}</h3>

        <button className={styles.seeMoreBtn}>See More</button>
    </div>
);

export default Card;
