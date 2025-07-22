
import { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io();

function App() {
  const [connected, setConnected] = useState(false);

  socket.on('connect', () => {
    setConnected(true);
  });

  return (
    <div className="app">
      <h1>Эволюция: Добро пожаловать!</h1>
      <button onClick={() => socket.emit('create_lobby')}>Создать лобби</button>
      <button onClick={() => socket.emit('join_lobby')}>Присоединиться</button>
      <button onClick={() => window.location.reload()}>Вернуться</button>
      <p>{connected ? '🟢 Подключено' : '🔴 Отключено'}</p>
    </div>
  );
}

export default App;
