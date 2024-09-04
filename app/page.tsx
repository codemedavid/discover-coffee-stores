import { Metadata } from "next";
import Image from "next/image";
import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoresType } from "@/types";
import NearbyCoffeStores from "@/components/nearby-coffee-stores";
export const metadata: Metadata = {
  title: "Coffee Lovers",
  description: "Find the nearest coffee shop"
}

  async function getData() {
  //mapbox_api
  if(!process.env.MAPBOX_API || !process.env.UNSPLASH_ACCESS_KEY || !process.env.AIRTABLE_TOKEN){
    throw new Error('One of the API Keys are not configured')
  }
  const TORONTO_LONG_LAT = '121.022031,14.6564211'
   return await fetchCoffeeStores(TORONTO_LONG_LAT, 8)
  }
export default async function Home() {
  const coffeeStores = await getData();
  const coffeeStoreId = "dark-horse-coffee"
  // console.log(coffeeStores)

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-gradient">
      <NearbyCoffeStores />
      <h2 className="py-5 text-3xl font-bold text-white">Cavite Stores</h2>
      <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6 ">
        {
          coffeeStores.map((stores : CoffeeStoresType, idx: number) => {
            return (
            <Card key={`${stores.name} - ${stores.id}`} name={stores.name} imgUrl={stores.imgUrl} href={`/coffee-store/${stores.id}?id=${idx}`}/>
            )
          })
        }
      </div>
    </main>
  );
}
