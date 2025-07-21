import React from 'react'

export default function Header() {
  return (
    <div className="bg-green-600 text-white p-4 flex items-center justify-between shadow">
      <span className="text-lg font-bold">Эволюция <span className="text-sm font-normal">v1.3.0</span></span>
      <span className="text-2xl">☰</span>
    </div>
  )
}