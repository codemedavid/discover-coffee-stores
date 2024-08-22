import { Metadata } from "next";
import Image from "next/image";
import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
export const metadata: Metadata = {
  title: "Coffee Lovers",
  description: "Find the nearest coffee shop"
}
export default function Home() {
  const coffeeStoreId = "dark-horse-coffee"
  const coffeeStores = [
    {name: "Starbucks", 
    imgUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
    href: "black-coffee"
    },
    {name: "Big brew", 
      imgUrl: "https://images.unsplash.com/photo-1671225146283-c6aae20a9d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
      href: "latte-coffee"
      },
      {name: "But first coffee", 
        imgUrl: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        href: "vanilla-coffee"
        },
  ]
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-gradient">
      <Banner />
      <h2 className="py-5 text-3xl font-bold text-white">Cavite Stores</h2>
      <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6 ">
        {
          coffeeStores.map((stores, idx) => {
            return (
            <Card key={`${stores.name} - ${idx}`} name={stores.name} imgUrl={stores.imgUrl} href={`/coffee-store/${stores.href}`}/>
            )
          })
        }
      </div>
    </main>
  );
}
