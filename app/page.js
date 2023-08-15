import Image from "next/image";
import { About, Explore, GetStarted, Hero, Navbar } from "@/sections";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div>
        <GetStarted />
      </div>
    </main>
  );
};

export default Home;
