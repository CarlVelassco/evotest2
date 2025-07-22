import { useState } from "react";
import io from "socket.io-client";

const socket = io();

export default function App() {
  const [connected, setConnected] = useState(false);

  const createLobby = () => {
    socket.emit("createLobby");
  };

  const joinLobby = () => {
    socket.emit("joinLobby", { lobbyId: "1234" });
  };

  const returnToMenu = () => {
    setConnected(false);
  };

  return (
    <div className="app">
      <h1>🌿 Эволюция: Добро пожаловать!</h1>
      {!connected ? (
        <div className="menu">
          <button onClick={() => setConnected(true)}>Играть как гость</button>
        </div>
      ) : (
        <div className="lobby">
          <button onClick={createLobby}>Создать лобби</button>
          <button onClick={joinLobby}>Присоединиться</button>
          <button onClick={returnToMenu}>Вернуться</button>
        </div>
      )}
    </div>
  );
}
