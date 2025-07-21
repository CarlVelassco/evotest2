import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [guestName, setGuestName] = useState('');
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <div className="container">
        <h1>🌿 Эволюция: Добро пожаловать!</h1>
        <p>Введите имя, чтобы играть как гость:</p>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Ваше имя"
        />
        <button onClick={() => setPlaying(true)} disabled={!guestName}>
          Начать игру
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>👋 Привет, {guestName}!</h2>
      <p>Игра начинается. Интерфейс в разработке...</p>
    </div>
  );
}