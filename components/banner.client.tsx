"use client"
import React from 'react'

export default function Banner() {
    const handleOnClick = () => {}
  return (
    <div>
      <h1>Coffee Connoisseur</h1>
      <h2>Discover your local coffee shops!</h2>
      <button onClick={handleOnClick}>View Stores nearby</button>
    </div>
  )
}
