import React from 'react';
import './Roster.css';

const Roster = () => {
  const mobileGames = [
    { name: 'COC', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'Clash Of Clans' },
    { name: 'Free Fire', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'Free Fire' },
    { name: 'BGMI', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'BGMI' },
    { name: 'Indus', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'Indus' },
  ];

  const pcGames = [
    { name: 'Valorant', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'Valorant' },
    { name: 'CS:GO', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'CS:GO' },
    { name: 'Dota 2', image: 'WhatsApp Image 2025-03-04 at 10.34.34_5eacea87.jpg', roster: 'Dota 2' },
  ];

  return (
    <div className="roster">
      <h1>Our Roster</h1>

      {/* Mobile Games Section */}
      <h4>Mobile Games</h4>
      <div className="game-cards">
        {mobileGames.map((game, index) => (
          <div className="card" key={index}>
            <div className="card-front">
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
            </div>
            <div className="card-back">
              <p>{game.roster}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PC Games Section */}
      <h4>PC Games</h4>
      <div className="game-cards">
        {pcGames.map((game, index) => (
          <div className="card" key={index}>
            <div className="card-front">
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
            </div>
            <div className="card-back">
              <p>{game.roster}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;