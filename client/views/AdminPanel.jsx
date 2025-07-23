
import React, { useEffect, useState } from "react";

export default function AdminPanel() {
  const [players, setPlayers] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);
  const [banned, setBanned] = useState([]);
  const [params, setParams] = useState({});
  const [mapData, setMapData] = useState("");
  const [auth, setAuth] = useState(false);
  const [passInput, setPassInput] = useState("");

  const adminPassword = "Carl2004"; // актуальный пароль

  useEffect(() => {
    if (auth) {
      fetch("/api/admin/status").then(res => res.json()).then(data => {
        setGameRunning(data.running);
        setPlayers(data.players);
        setBanned(data.banned);
        setParams(data.params);
        setMapData(data.map);
      });
    }
  }, [auth]);

  if (!auth) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Введите пароль администратора</h2>
        <input type="password" value={passInput} onChange={e => setPassInput(e.target.value)} />
        <button onClick={() => {
          if (passInput === adminPassword) setAuth(true);
          else alert("Неверный пароль");
        }}>Войти</button>
      </div>
    );
  }

  const toggleGame = () => {
    fetch("/api/admin/toggle-game", { method: "POST" }).then(() =>
      setGameRunning(!gameRunning)
    );
  };

  const giveResources = (id, amount = 100) => {
    fetch("/api/admin/give-resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, amount })
    });
  };

  const toggleBan = (id) => {
    fetch("/api/admin/toggle-ban", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    }).then(() => setBanned(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    ));
  };

  const updateParams = () => {
    fetch("/api/admin/update-params", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });
  };

  const updateMap = () => {
    fetch("/api/admin/update-map", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ map: mapData })
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Панель администратора</h1>
      <button onClick={toggleGame}>
        {gameRunning ? "Остановить игру" : "Запустить игру"}
      </button>

      <h2>Игроки</h2>
      <ul>
        {players.map(p => (
          <li key={p.id}>
            {p.name} 
            <button onClick={() => giveResources(p.id)}>+100 ресурсов</button>
            <button onClick={() => toggleBan(p.id)}>
              {banned.includes(p.id) ? "Разбанить" : "Забанить"}
            </button>
          </li>
        ))}
      </ul>

      <h2>Параметры игры</h2>
      <textarea value={JSON.stringify(params, null, 2)} rows={10} cols={50}
        onChange={e => {
          try {
            setParams(JSON.parse(e.target.value));
          } catch (_) {}
        }} />
      <br />
      <button onClick={updateParams}>Обновить параметры</button>

      <h2>Карта</h2>
      <textarea value={mapData} rows={10} cols={50}
        onChange={e => setMapData(e.target.value)} />
      <br />
      <button onClick={updateMap}>Сохранить карту</button>
    </div>
  );
}
