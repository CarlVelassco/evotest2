import React from 'react';
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000");
  return <div>Эволюция: Добро пожаловать! (с socket.io)</div>;
}

export default App;