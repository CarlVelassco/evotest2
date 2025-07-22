
import { useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`app ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
      <h1>🌿 Эволюция: Добро пожаловать!</h1>
      <div className="buttons">
        <button onClick={() => socket.emit('createRoom')}>Создать лобби</button>
        <button onClick={() => socket.emit('joinRoom')}>Присоединиться</button>
        <button>Вернуться</button>
      </div>
    </div>
  );
}

export default App;
