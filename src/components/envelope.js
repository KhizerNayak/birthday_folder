// Envelope.js
import React, { useState } from 'react';
import './css/Envelope.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleReset = () => {
        setIsOpen(false);
    };
   
    const handleGoBeyond = () => {
        navigate('/flower'); // Navigate to the homepage
    };
    return (
        <div className="envelope-container">
            <div className={`envelope-wrapper ${isOpen ? 'open' : 'close'}`} id="envelope">
                <div className="front flap"></div>
                <div className="front pocket"></div>
                <div className="letter">
                    <p className="words line1">Hello Precious,</p>
                    <p className="words line2">it,s 27/07/24!</p>
                    <p className="words line3">Happy Birthday.. KIDDO..!</p>

                    
                </div>
                <div className="hearts">
                    <div className="heart a1"></div>
                    <div className="heart a2"></div>
                    <div className="heart a3"></div>
                </div>
            </div>
            <div className="reset">
                <button onClick={handleOpen}>Open</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleGoBeyond}>Go Beyond this realm </button>
            </div>
            <h3 className="valentine">HEY .. KIDDO.!</h3>
        </div>
    );
};

export default Envelope;
