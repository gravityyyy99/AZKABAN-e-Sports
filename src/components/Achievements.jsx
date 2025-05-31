import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      year: '2023',
      title: 'Championship Winner',
      description: 'Won the national esports championship in 2023.',
    },
    {
      id: 2,
      year: '2022',
      title: 'Best Team of the Year',
      description: 'Awarded the best esports team of the year 2022.',
    },
    {
      id: 3,
      year: '2021',
      title: 'Global Tournament Finalist',
      description: 'Reached the finals of the global esports tournament 2021.',
    },
    {
      id: 4,
      year: '2020',
      title: 'Community Impact Award',
      description: 'Recognized for our contribution to the esports community.',
    },
  ];

  return (
    <div className="achievements">
      <h1>Our Achievements</h1>
      <div className="timeline">
        {achievements.map((achievement, index) => (
          <div key={achievement.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{achievement.year}</h3>
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;