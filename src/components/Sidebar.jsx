import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/achievements">Achievements</a>
        <a href="/roster">Roster</a>
        <a href="/merch">Merch</a>
      </nav>
    </div>
  );
};

export default Sidebar;