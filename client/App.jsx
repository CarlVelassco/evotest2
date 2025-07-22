import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io();

function App() {
  const [message, setMessage] = useState("");
  const [log, setLog] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setLog((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="app">
      <h1>🌿 Эволюция: Лобби</h1>
      <div className="chat-log">
        {log.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Сообщение в лобби..."
      />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
}

export default App;
