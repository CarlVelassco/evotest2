
import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    alert(`Письмо отправлено на ${email}`);
  };

  return (
    <div className="welcome">
      <h1>🌿 Эволюция: Добро пожаловать!</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Введите email для входа"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default App;
