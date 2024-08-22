import React from 'react'

export default function Page({params} : {params: {id: string}}) {
  return (
    <div className='p-2 text-white text-2xl'>
        {params.id} Coffee
    </div>
  )
}
