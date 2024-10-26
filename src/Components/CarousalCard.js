import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, thumbnail }) => {
const navigate = useNavigate();


const handleSeeMore = () => {
    navigate(`/${title}`)
}
    return (
        <div style={styles.card}>
            <img src={thumbnail} alt={`${title} Thumbnail`} style={styles.thumbnail} />
            <h3 style={styles.title}>{title}</h3>
            <button onClick={handleSeeMore} style={styles.button}>
                See More
            </button>
        </div>
    );
};
const styles = {
    card: {
        minWidth: "200px",
        flex: '1 0 auto',
        width: '400px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    thumbnail: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    title: {
        fontSize: '1.2rem',
        margin: '15px 0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default CourseCard;
