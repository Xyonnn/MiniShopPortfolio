import mongoose from "mongoose";

export async function connectDB() : Promise<void> {
    if(mongoose.connection.readyState >= 1)
        return;
    const url = process.env.MONGO_URL;

    if(!url){
        throw new Error(".env not working");
    }

    await mongoose.connect(url);
}