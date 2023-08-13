import Image from "next/image";
import { About, Explore, Hero, Navbar } from "@/sections";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div />
        <Explore />
      </div>
    </main>
  );
};

export default Home;
