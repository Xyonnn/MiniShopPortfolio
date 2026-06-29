import { connectDB } from "@/lib/db";
import { CarModel } from "@/models/shopItems";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectDB();
        const cars = await CarModel.find();

        return NextResponse.json(JSON.parse(JSON.stringify(cars)));
    }catch(err){
        return NextResponse.json({err: "Fetching faild"}, {status: 500});
    }
    
}
