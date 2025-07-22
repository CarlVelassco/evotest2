
import React from 'react';

function App() {
  return (
    <div>
      <h1>Добро пожаловать в Эволюцию!</h1>
      <button onClick={() => alert('Создать лобби')}>Создать лобби</button>
      <button onClick={() => alert('Присоединиться')}>Присоединиться</button>
      <button onClick={() => alert('Вернуться')}>Вернуться</button>
    </div>
  );
}

export default App;
