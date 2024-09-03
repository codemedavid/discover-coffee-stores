'use client'
import React, { useEffect, useState } from 'react'
import Banner from './banner.client'
import useTrackLocation from '@/hooks/use-track-location'
import { CoffeeStoresType } from '@/types'
import Card from './card.server'
import { fetchCoffeeStores } from '@/lib/coffee-stores'
export default function NearbyCoffeStores() {
    const {handleTrackLocation, isFindingLocation, longLat, locationErrorMsg} = useTrackLocation()
    const [coffeeStores, setCoffeeStores] = useState([])
    const handleOnClick = () => {
      handleTrackLocation()
    }

    useEffect(() => {
      async function coffeeStoresByLocation() {
        if(longLat){

          try {
            const limit = 10
            const response = await fetch(`/api/getCoffeeStoresByLocation?longLat=${longLat}&limit=${limit}`)
            const coffeeStores = await response.json()
            setCoffeeStores(coffeeStores)            
          } catch (error) {
            console.error(`Error while fetching coffee stores: ${error}`)
          }

        }
      }

      coffeeStoresByLocation()
    }, [longLat])

  return (  
    <div>
      <div>
        <Banner handleOnClick={handleOnClick} buttonText={isFindingLocation ? 'Locating...' : 'View stores nearby'}/>
      </div>
     
      <br />
     {locationErrorMsg && <p className='text-lg text-red-900'> Error: {locationErrorMsg}</p>}
      {longLat && coffeeStores.length > 0 && <h2 className="py-5 text-3xl font-bold text-white">Stores near me</h2>}
      <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6 ">
        {
          coffeeStores.map((stores : CoffeeStoresType, idx: number) => {
            return (
            <Card key={`${stores.name} - ${stores.id}`} name={stores.name} imgUrl={stores.imgUrl} href={`/coffee-store/${stores.id}?id=${idx}`}/>
            )
          })
        }
      </div>
    </div>
  )
}
