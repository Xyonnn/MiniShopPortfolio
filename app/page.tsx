import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">

      </main>

      <Footer></Footer>
    </div>
  );
}
