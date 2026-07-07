import { ICar } from "@/models/shopItems"

export default function ProductCard({car}: {car: ICar}){
    return(
         <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img src={car.src[0]} alt={car.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {car.name}
                    {car.sale && (
                        <span className="badge badge-error">-{car.salePercent}%</span>
                    )}
                </h2>
                <p>{car.miniDescription}</p>
                <p className="text-lg font-bold">{car.price}</p>
                    {!car.available && (
                        <span className="badge badge-warning">Unavailable</span>
                    )}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" disabled={!car.available}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}