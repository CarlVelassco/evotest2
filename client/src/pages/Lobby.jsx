import React from 'react'
import Header from '../components/Header'

export default function Lobby({ username }) {
  return (
    <div className="bg-zinc-900 text-white h-screen">
      <Header />
      <div className="flex p-4">
        <div className="w-2/3 bg-zinc-800 p-4 rounded mr-2">
          <h2 className="text-xl mb-2">Комнаты:</h2>
          <div className="flex items-center justify-between p-2 bg-zinc-900 rounded mb-2">
            <span>Room «Хозяин» (7/8)</span>
            <span className="text-yellow-400 cursor-pointer">👁</span>
          </div>
        </div>
        <div className="w-1/3 bg-zinc-800 p-4 rounded">
          <h2 className="text-xl mb-2">Онлайн: 9</h2>
          <div className="text-sm text-gray-300">[00:16]: Сервер запустился.</div>
        </div>
      </div>
    </div>
  )
}