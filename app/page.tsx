import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { CarModel } from "@/models/shopItems";
import { ICar } from "@/models/shopItems";
import ProductCard from "./components/productCard";
import { connectDB } from "@/lib/db";


export default async function Home() {
  await connectDB();
  const raw = await CarModel.find();
  const cars: ICar[] = JSON.parse(JSON.stringify(raw));

  return (
     <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {
          cars.map((car) =>(
            <ProductCard key={car.carID} car={car}></ProductCard>
          ))
        }
      </main>

      <Footer></Footer>
    </div>
  );
}
