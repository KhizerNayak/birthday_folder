import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HomePage.css'; // Make sure to create this CSS file for styling
import bg from '../assest/giampier-llanos-GDBjlWyfh6g-unsplash.jpg';

// Assuming the audio file is in the 'public/audio' folder
const audioFile = '../assest/hbd.mp3';

const cardsData = [
  { id: 1, title: 'POEM 1' },
  { id: 2, title: 'POEM 2' },
  { id: 3, title: 'POEM 3' },
  { id: 4, title: 'POEM 4' }
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Home = () => {
  const [cards, setCards] = useState(shuffleArray(cardsData));
  const navigate = useNavigate();

  useEffect(() => {
    // Play the audio when the component mounts
    const audio = new Audio(audioFile);
    audio.loop = true; // Optional: Loop the audio
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });

    // Cleanup audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleCardClick = (id) => {
    navigate(`/poem/${id}`);
  };

  return (
    <div className='home'>
      <div className="home-container">
        <button className="shuffle-button" onClick={() => setCards(shuffleArray(cardsData))}>
          Shuffle Cards
        </button>
        <div className="cards-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.id)}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
