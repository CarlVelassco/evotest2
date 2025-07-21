import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark bg-gray-900 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <button onClick={() => setDark(!dark)} className="absolute top-4 left-4">
        {dark ? <Sun /> : <Moon />}
      </button>
      <h1 className="text-3xl font-bold mb-4">🌿 Эволюция: Добро пожаловать!</h1>
      <p>Это стартовая страница игры. Интерфейс в разработке...</p>
    </div>
  );
}
