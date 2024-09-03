import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest, response: NextResponse){
    try{
        const searchParams =  request.nextUrl.searchParams
        const longLat = searchParams.get('longLat') || ''
        const limit = searchParams.get('limit') || ''
        if(longLat){
            const response = await fetchCoffeeStores(longLat, parseInt(limit))
            return NextResponse.json(response)
            //setCoffeeStores(response)
          }
        // return Response.json({
        //     message: "hello"
        // })
    }catch(err){
        console.error(err)
        return NextResponse.json(`Something went wrong ${err}`, {
            status: 500
        })
    }
}