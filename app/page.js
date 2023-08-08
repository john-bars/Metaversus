import Image from "next/image";
import { Hero, Navbar } from "@/sections";

const Home = () => {
  return (
    <main className="p-6">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
