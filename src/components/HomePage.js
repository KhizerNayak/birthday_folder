import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HomePage.css'; // Make sure to create this CSS file for styling
import bg from '../assest/giampier-llanos-GDBjlWyfh6g-unsplash.jpg'


const cardsData = [
  { id: 1, title: 'POEM 1' },
  { id: 2, title: 'POEM  2' },
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
const updateRootStyles = () => {
  document.documentElement.style.setProperty('background',bg); //used for creating this bg after loading
  // Add other style updates here if needed
};

const Home = () => {
  const [cards, setCards] = useState(shuffleArray(cardsData));
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/poem/${id}`);
  };
  updateRootStyles();
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
