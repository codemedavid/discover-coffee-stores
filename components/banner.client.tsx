"use client"
import React, { MouseEventHandler } from 'react'

export default function Banner({handleOnClick, buttonText} : 
{
  handleOnClick: MouseEventHandler<HTMLButtonElement> | undefined,
  buttonText: string
}) {
  console.log()
  return (
    <div>
      <h1>Coffee Connoisseur</h1>
      <h2>Discover your local coffee shops!</h2>
      <button onClick={handleOnClick}>{buttonText}</button>
    </div>
  )
}
