import React, { useState } from 'react'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-900">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-72">
        <h2 className="mb-4 text-gray-200">Имя пользователя</h2>
        <input
          type="text"
          className="w-full p-2 bg-zinc-900 text-white border-b border-gray-500 outline-none mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => onLogin(name)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          ВХОД
        </button>
      </div>
    </div>
  )
}