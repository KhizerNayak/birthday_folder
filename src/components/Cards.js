import React from 'react';
import './css/Cards.css'; // Import the CSS file for styling


const Cards = ({ image, text, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {image && <img src={image} alt="Card visual" className="card-image" />}
            <p className="card-text">{text}</p>
        </div>
    );
};

export default Cards;

