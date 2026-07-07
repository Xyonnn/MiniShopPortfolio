import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { CarModel } from "@/models/shopItems";
import { ICar } from "@/models/shopItems";
import ProductCard from "./components/productCard";
import { connectDB } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  await connectDB();
  const raw = await CarModel.find();
  const cars: ICar[] = JSON.parse(JSON.stringify(raw));

  return (
     <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>

      <main className="max-w-7xl mx-auto w-full px-6 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          cars.map((car) =>(
            <Link key={car.carID} href={`/products/${car.name}`}>
              <ProductCard car={car}></ProductCard>
            </Link>
          ))
        }
      </main>

      <Footer></Footer>
    </div>
  );
}
