
import React, { useEffect, useState } from 'react';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      className={`theme-toggle ${dark ? 'dark' : 'light'}`}
      onClick={() => setDark(!dark)}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
