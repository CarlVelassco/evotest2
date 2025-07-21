import React, { useState } from 'react';
import './theme.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="container">
      <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
      <h1>🌿 Эволюция: Добро пожаловать!</h1>
      <p>Играй как гость или войди по email (скоро).</p>
      <div className="menu">
        <button>Создать лобби</button>
        <button>Присоединиться</button>
        <button>Вернуться</button>
      </div>
    </div>
  );
}