'use client'
import React, { useEffect } from 'react'

export default function Error({error, reset} : {error: Error & {digest?: string}; reset: () => void}) {
  useEffect(() => {
    console.log('Error')
  },[error])
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>You need to configure your environtment variables, check the Readme.md file.</p>
      <p>The environment variables are MAPBOX_API, UNSPLASH_ACCESS_KEY and AIRTABLE_TOKEN.
         Create these environment variables with values inside .env.local file. </p>

         <button onClick={() => reset()}>Try Again!</button>
    </div>
  )
}
