import { ICarInfo, ICar } from "@/models/shopItems";
import { CarInfoModel, CarModel } from "@/models/shopItems";
import { connectDB } from "@/lib/db";

type Props = {params: Promise<{name: string}>}

export default async function ProductDetailPage({params}: Props){
    const { name } = await params;
    const nameMatchingVar = decodeURIComponent(name);
    await connectDB();
    
    const rawCar = await CarModel.findOne({name: nameMatchingVar});
    const cdata: ICar = JSON.parse(JSON.stringify(rawCar));

    const raw = await CarInfoModel.findOne({CarInfoID: cdata.carID});
    const data: ICarInfo = JSON.parse(JSON.stringify(raw));

    return(
        <div>
            <p>{data.brand}</p>
        </div>
    );
}