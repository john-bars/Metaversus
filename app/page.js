import Image from "next/image";
import {
  About,
  Explore,
  GetStarted,
  Hero,
  Navbar,
  WhatsNew,
  World,
} from "@/sections";

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
        <div className="gradient-04 z-0 " />
        <WhatsNew />
      </div>
      <World />
    </main>
  );
};

export default Home;
