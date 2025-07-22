import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [screen, setScreen] = useState('menu');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.className = theme === 'light' ? 'dark' : 'light';
  };

  const renderScreen = () => {
    switch (screen) {
      case 'menu':
        return (
          <div className="menu">
            <h1>🌿 Эволюция: Добро пожаловать!</h1>
            <button onClick={() => setScreen('create')}>Создать лобби</button>
            <button onClick={() => setScreen('join')}>Присоединиться</button>
            <button onClick={() => setScreen('game')}>Играть как гость</button>
          </div>
        );
      case 'create':
        return <div><h2>Создание лобби</h2><button onClick={() => setScreen('menu')}>Назад</button></div>;
      case 'join':
        return <div><h2>Присоединение к лобби</h2><button onClick={() => setScreen('menu')}>Назад</button></div>;
      case 'game':
        return <div><h2>Игра началась!</h2><button onClick={() => setScreen('menu')}>Назад</button></div>;
      default:
        return null;
    }
  };

  return (
    <div className={`app ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
      {renderScreen()}
    </div>
  );
}
