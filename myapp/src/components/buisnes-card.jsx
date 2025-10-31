// components/AboutPage.jsx

import React from 'react';

// Создаем "страничку" - это функция, которая возвращает то, что мы увидим
function BuisnesCard() {
    return (
    <>
      <h1>Business Card (Flexbox)</h1>

      <div className="business-card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8to2RFLlm6XPSeODI0_Rr-oxrR5QDO32kA&s" 
          alt="Profile" 
        />
        <div className="info">
          <h2>John Doe</h2>
          <p className="role">Front-end Learner</p>
          <p>Learning Flexbox and building modern responsive layouts.</p>
          <a href="https://en.wikipedia.org/wiki/Steve_Jobs" className="btn">Learn More</a>
        </div>
      </div>

    </>
  );
}

// Делаем нашу "страничку" доступной для использования в других файлах
export default BuisnesCard;