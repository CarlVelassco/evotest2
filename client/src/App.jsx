
import React, { useEffect, useState } from 'react';
import './index.css';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div className="app">
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? '🌙' : '☀️'}
      </button>
      <h1>🌿 Эволюция: Добро пожаловать!</h1>
      <p>Это стартовая страница игры. Интерфейс в разработке...</p>
    </div>
  );
}
