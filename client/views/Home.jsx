
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Добро пожаловать в EVOOO</h1>
      <p>Нажмите кнопку ниже, чтобы начать игру.</p>
      <button style={{ fontSize: 18, padding: "10px 20px" }}>
        Играть
      </button>
      <div style={{ marginTop: 30 }}>
        <Link to="/admin">Вход администратора</Link>
      </div>
    </div>
  );
}
