import React, { useState } from 'react'
import Login from './pages/Login'
import Lobby from './pages/Lobby'

function App() {
  const [username, setUsername] = useState(null)

  return username ? <Lobby username={username} /> : <Login onLogin={setUsername} />
}

export default App