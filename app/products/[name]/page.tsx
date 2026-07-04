import { ICarInfo, ICar } from "@/models/shopItems";
import { CarInfoModel, CarModel } from "@/models/shopItems";
import { connectDB } from "@/lib/db";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";


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
        <>
            <Navbar />
                <div className="bg-base-200 py-10">
                    <div className="w-[90%] md:w-[75%] mx-auto px-4 space-y-8">
                        <div className="bg-base-100 rounded-box shadow-sm p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[50vh]">
                           <div className="lg:col-span-2">
                                <div className="carousel w-full rounded-box bg-base-200">
                                   {cdata.src.map((src, idx) => (
                                        <div key={idx} id={`slide${idx + 1}`} className="carousel-item relative w-full">
                                            <img src={src} className="w-full aspect-video object-cover"/>
                                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                    <a href={`#slide${idx === 0 ? cdata.src.length : idx}`} className="btn btn-circle btn-sm"> ❮ </a>
                                                    <a href={`#slide${idx === cdata.src.length - 1 ? 1 : idx + 2}`} className="btn btn-circle btn-sm"> ❯ </a>
                                                </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex w-full justify-center gap-2 py-3">
                                    {cdata.src.map((_, idx) => (
                                        <a key={idx} href={`#slide${idx + 1}`} className="btn btn-xs btn-circle"> {idx + 1}</a>
                                    ))}
                                </div>

                                <div className="flex gap-2 overflow-x-auto">
                                    {cdata.src.map((src, idx) => (
                                        <a key={idx} href={`#slide${idx + 1}`} className="border border-base-300 rounded-md overflow-hidden shrink-0 hover:border-primary transition-colors">
                                            <img src={src} className="w-24 aspect-video object-cover"/>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="text-2xl font-bold leading-snug">{cdata.name}</h1>
                                <p className="text-sm text-base-content/60 mt-1">
                                    {data.usage} - {cdata.prodYear}
                                </p>

                                <div className="mt-6">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="line-through text-base-content/50 text-sm">
                                                {cdata.price.toLocaleString("pl-PL")} PLN
                                            </span>
                                            <span className="badge badge-error text-white text-xs">
                                                {cdata.salePercent}%
                                            </span>
                                        </div>

                                        <div className="flex items-baseline gap-2">
                                            {/* zmienic na cene po rabacie*/}
                                            <span className="text-4xl font-bold"> {cdata.price}</span>
                                            <span className="text-lg font-semibold">PLN</span>
                                        </div>
                                </div>

                                <button className="btn btn-primary mt-5 w-full lg:w-auto" disabled={!cdata.available}>
                                    Dodaj do koszyka
                                </button>

                                {!cdata.available && (
                                    <span className="badge badge-error badge-outline mt-3">
                                        Niedostępny
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="bg-base-100 rounded-box shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-3">Opis</h2>
                            <p className="leading-relaxed text-base-content/80">{data.description}</p>
                        </div>

                        <div data-theme="business" className="bg-base-100 rounded-box shadow-sm p-6">
                            <h2 className="text-2xl font-semibold mb-4">Specyfikacja</h2>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <tbody>
                                        {/* zrobic do konca tabele */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}