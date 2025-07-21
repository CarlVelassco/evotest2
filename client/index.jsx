import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <button onClick={toggleTheme} style={{ position: 'absolute', top: 20, right: 20 }}>🌓</button>
      <h1>Hello from React!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));