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

export async function POST(req: Request) {
    try{
        await connectDB();
        const body = await req.json();
        const newCar = await CarModel.create(body);

        return NextResponse.json(JSON.parse(JSON.stringify(newCar)));
    }catch(err){
        return NextResponse.json({err: "Faild to post"}, {status: 500});
    }
}